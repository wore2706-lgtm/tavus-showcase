export async function handler(event) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { text } = JSON.parse(event.body);
    
    if (!text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Text is required' })
      };
    }

    // Tavus API endpoint
    const response = await fetch('https://tavusapi.com/v2/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.TAVUS_API_KEY
      },
      body: JSON.stringify({
        replica_id: 'anna', // Default replica
        script: text,
        background_url: 'https://lissyaisolutions.com', // Optional background
        voice: 'en-US-JennyNeural' // English voice
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Tavus API error:', error);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to generate video', details: error })
      };
    }

    const data = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        videoId: data.video_id,
        statusUrl: data.status_url,
        message: 'Video generation started successfully'
      })
    };
    
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error', details: error.message })
    };
  }
}