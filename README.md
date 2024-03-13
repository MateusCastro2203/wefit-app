<!DOCTYPE html>
<html lang="en">
<head>
<body>
    <div class="container">
        <h1>Avaliação React Native</h1>
        <p><strong>Desafio de Estruturação de Projeto React Native + TypeScript + styled-components</strong></p>
        <p>Figma: <a href="https://www.figma.com/file/TETzIuf8UnkRGWSyxvPigc/Teste-Mobile-WeFit---2022?node-id=0-1&t=Aa9FRklLOuaMho0W-0">Link para o Figma</a></p>
        <h2>Integração</h2>
        <p>Utilizar o endpoint <code>https://api.github.com/users/[Usuário]/repos</code> para integrar e alimentar os dados conforme o layout.</p>
        <p>Campos que serão usados: <em>full_name, description, owner.avatar_url, stargazers_count, language</em> e <em>html_url</em></p>
        <p>Exemplo de endpoint: <code>https://api.github.com/users/facebook/repos</code></p>
        <h2>Funcionalidades</h2>
        <ul>
            <li>Listagem dos repositórios de acordo com o retorno do endpoint.</li>
            <li>Ao clicar em "Favoritar", os dados do repositório devem ser persistidos localmente (ex: Async Storage) e o elemento deve ser removido da listagem dos repositórios.</li>
            <li>Clicando no ícone da estrela no menu inferior deve navegar para a listagem dos repositórios favoritados, recuperando todos os dados salvos localmente, independente de qual usuário do GitHub está selecionado.</li>
            <li>Clicando no ícone de configurações deve abrir um modal, onde poderá mudar o repositório indicado.</li>
            <li>Com o dispositivo offline, deve ser possível acessar a aba de Favoritos e retornar os valores salvos.</li>
            <li>Ao clicar no card, deve navegar para a tela de Detalhes. O texto exibido na tela de detalhes é apenas o campo <em>description</em>.</li>
            <li>Ao clicar no botão "Ver Repositório", deve navegar para fora do app apontando para a rota <em>html_url</em>.</li>
        </ul>
        <h2>Requisito Técnico</h2>
        <p>Expo SDK: inicialize o projeto com o framework Expo para facilitar a execução e análise.</p>
        <h2>Avaliação</h2>
        <p><strong>Pontos avaliados:</strong></p>
        <ul>
            <li>Fidelidade do layout do Figma;</li>
            <li>Funcionamento da aplicação (ausência de bugs);</li>
            <li>Qualidade do código:</li>
            <ul>
                <li>Organização das pastas;</li>
                <li>Domínio do TypeScript;</li>
                <li>Domínio do styled-components;</li>
                <li>Bom nível de Componentização UI;</li>
                <li>Aplicação de tecnologias;</li>
                <li>Aplicação das melhores práticas para isolar comportamento de UI da lógica de Integração;</li>
                <li>Código legível e de fácil manutenção;</li>
                <li>Código limpo.</li>
            </ul>
        </ul>
    </div>
</body>
</html>
