

exports.handler = async function(event, context) {

    const fetch = await import('node-fetch').then(mod => mod.default);

    try {
        const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/goods';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    
    };
};