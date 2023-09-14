# express-multer-image-uploader

Uma aplicação fullstack simples que permite o upload de imagens, recuperação e exibição no frontend.

## Sobre

Essa aplicação foi desenvolvida para testar como seria implementado um upload de imagens, como armazenar os dados e como utilizar esses 
dados para renderizar essa imagem novamente no HTML.

### Frontend

Uma página que exibe um formulário de cadastro de uma imagem, uma lista de todas as imagens cadastradas e um preview de uma imagem.

### Backend

O backend conta com uma API desenvolvida para o frontend e os seguintes endpoints:

#### POST `/images`

Recebe uma imagem na chave file do body da requisição no formato `multipart/form-data` e retorna o objeto que foi salvo com as informações da imagem.

##### Exemplo de requisição com JavaScript

```
const formData = new FormData();
formData.append('file', someJavaScriptFileObject);

fetch('http://localhost:3001/images', {
  method: 'POST',
  body: formData,
});
```

##### Exemplo de resposta

```
{
  "id": "1694722408357",
  "name": "poly-cat.png"
}
```

#### GET `/images`

Retorna uma lista com as informações necessárias de todas as imagens cadastradas.

##### Exemplo de resposta

```
[
  {
    "id": "1694722408357",
    "name": "poly-cat.png"
  },
  {
    "id": "2705833519468",
    "name": "other-image.png"
  }
]
```

#### GET `/images/:id`

Retorna os dados de uma imagem específica.

##### Exemplo de resposta

```
{
  "id": "1694722408357",
  "name": "poly-cat.png",
  "mimetype": "image/png",
  "bufferString": "iVBORw0KGgoAAAANSUhEUgAAB4AAAAT7CAIAAADwzToOAAEAAElEQVR42uz96bMkSZIfiKmau0fEu/LOrOq..."
}
```

## Tecnologias

- Docker e Docker Compose

### Frontend

- HTML, CSS, JavaScript, TypeScript, http-server

### Backend

- Node.js, Express.js, Multer, TypeScript

## Como rodar

1. Clone o repositório
2. Execute o comando `docker compose up -d` no seu terminal
3. Acesse o frontend em http://localhost:8080
4. Acesse o backend em http://localhost:3001
