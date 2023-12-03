function breadframe(url) {
    const apiUrl = url;

        // Fetch code from the API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.text();
            })
            .then(code => {
                // Display the code on the webpage
                document.getElementById('code-container').innerText = code;
            })
            .catch(error => {
                console.error('Error fetching code:', error);
      });
}
