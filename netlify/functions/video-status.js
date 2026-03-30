export async function handler(event) {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { videoId } = event.queryStringParameters;
    
    if (!videoId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Video ID is required' })
      };
    }

    // Check video status from Tavus API
    const response = await fetch(`https://tavusapi.com/v2/videos/${videoId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.TAVUS_API_KEY
      }
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Tavus API error:', error);
      return {
        statusCode: response.status,
        body: JSON.stringify({ 
          error: 'Failed to get video status', 
          details: error,
          status: 'unknown'
        })
      };
    }

    const data = await response.json();
    
    // Map Tavus status to our simplified status
    let status = 'processing';
    let videoUrl = null;
    
    if (data.status === 'completed') {
      status = 'completed';
      videoUrl = data.video_url || data.download_url;
    } else if (data.status === 'failed' || data.status === 'error') {
      status = 'failed';
    } else if (data.status === 'processing' || data.status === 'pending') {
      status = 'processing';
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        videoId: data.video_id,
        status: status,
        videoUrl: videoUrl,
        tavusStatus: data.status,
        message: `Video status: ${status}`
      })
    };
    
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error', 
        details: error.message,
        status: 'error'
      })
    };
  }
}