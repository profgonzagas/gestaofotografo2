
async function showUserDetails(userId) {
    try {
        const response = await fetch(`https://reqres.in/api/users/${userId}`);
        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.statusText}`);
        }
        const userDetails = await response.json();
        const resultDiv = document.getElementById('result');

        if (resultDiv) {
            resultDiv.innerHTML = '<h2>Detalhes do Usuário:</h2>';
            resultDiv.innerHTML += `<p>ID: ${userDetails.data.id}</p>`;
            resultDiv.innerHTML += `<p>Nome: ${userDetails.data.first_name} ${userDetails.data.last_name}</p>`;
            resultDiv.innerHTML += `<p>Email: ${userDetails.data.email}</p>`;
            resultDiv.innerHTML += `<img src="${userDetails.data.avatar}" alt="Avatar">`;
        } else {
            console.error('Elemento "result" não encontrado.');
        }
    } catch (error) {
        const resultDiv = document.getElementById('result');
        if (resultDiv) {
            resultDiv.textContent = `Erro ao obter dados do usuário: ${error.message}`;
        } else {
            console.error('Elemento "result" não encontrado.');
        }
    }
}


function showUserDetailsAlert() {
    alert('Button clicked!');
}
