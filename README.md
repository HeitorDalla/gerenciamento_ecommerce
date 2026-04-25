# 🎯 API de Gestão de Produtos com NestJS

Uma API RESTful completa com autenticação JWT e CRUD para múltiplas entidades de um sistema de gestão de produtos.

## 🌟 Recursos Principais

- ✅ **Autenticação JWT** - Sistema completo de registro e login com hash de senhas
- ✅ **9 Entidades CRUD** - Departamentos, Categorias, Marcas, Produtos, e mais
- ✅ **Proteção de Rotas** - Endpoints protegidos com JwtAuthGuard
- ✅ **Relacionamentos** - Modelos com relacionamentos entre tabelas
- ✅ **Banco MySQL** - Configurado com Sequelize ORM
- ✅ **TypeScript** - Código totalmente tipado
- ✅ **Documentação Completa** - Exemplos e guias de uso

## 📋 Entidades Gerenciadas

1. **Usuários** - Autenticação e controle de acesso
2. **Departamentos** - Agrupamento de categorias
3. **Categorias** - Categorização de produtos
4. **Subcategorias** - Subcategorização de produtos
5. **Marcas** - Marcas de produtos
6. **Unidades de Medida** - Unidades para produtos
7. **Produtos** - Catálogo completo de produtos
8. **Preços de Venda** - Histórico e controle de preços
9. **Produtos Similares** - Relacionamento entre produtos

## 🚀 Quick Start

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
Edite o arquivo `.env`:
```env
DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=projeto_db
JWT_SECRET=sua_chave_secreta
JWT_EXPIRATION=3600
```

### 3. Criar Banco de Dados
```bash
mysql -u root < script_banco_dados.sql
```

### 4. Executar em Desenvolvimento
```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`

## 📚 Documentação

### Documentos Principais:
- [API_DOCUMENTACAO.md](API_DOCUMENTACAO.md) - Documentação completa de todos os endpoints
- [RESUMO_IMPLEMENTACAO.md](RESUMO_IMPLEMENTACAO.md) - Resumo técnico da implementação
- [postman_collection.json](postman_collection.json) - Coleção para testes no Postman

## 🔐 Autenticação

### Registrar Novo Usuário
```bash
POST /auth/register
{
  "username": "seu_usuario",
  "email": "seu_email@example.com",
  "password": "sua_senha"
}
```

### Fazer Login
```bash
POST /auth/login
{
  "username": "seu_usuario",
  "password": "sua_senha"
}
```

**Resposta:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { ... }
}
```

## 📡 Endpoints Disponíveis

### Autenticação
- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Fazer login

### Departamentos
- `GET /departamento` - Listar todos
- `GET /departamento/:id` - Obter por ID
- `POST /departamento` - Criar (requer autenticação)
- `PUT /departamento/:id` - Atualizar (requer autenticação)
- `DELETE /departamento/:id` - Deletar (requer autenticação)

### Marcas
- `GET /marca` - Listar todos
- `POST /marca` - Criar (requer autenticação)
- `PUT /marca/:id` - Atualizar (requer autenticação)
- `DELETE /marca/:id` - Deletar (requer autenticação)

### E mais...
**Mesmos padrões se aplicam a:** Categorias, Subcategorias, Unidades de Medida, Produtos, Preços de Venda, Produtos Similares

## 🛠️ Scripts Disponíveis

```bash
npm run start        # Executar em produção
npm run start:dev    # Executar em desenvolvimento com watch
npm run build        # Compilar TypeScript
npm run lint         # Executar linter
npm run test         # Executar testes
npm run test:e2e     # Executar testes e2e
```

## 📦 Tecnologias

- **NestJS 11** - Framework backend robusto
- **TypeScript** - Linguagem tipada
- **Sequelize** - ORM para MySQL
- **MySQL** - Banco de dados relacional
- **JWT** - Autenticação stateless
- **Passport.js** - Estratégias de autenticação
- **bcryptjs** - Hash seguro de senhas

## 📁 Estrutura do Projeto

```
src/
├── auth/              # Módulo de autenticação
├── models/            # Modelos Sequelize
├── modules/           # Módulos de funcionalidades
│   ├── auth/
│   ├── departamento/
│   ├── marca/
│   ├── categoria/
│   ├── subcategoria/
│   ├── unidade-medida/
│   ├── produto/
│   ├── preco-venda/
│   └── produto-similar/
├── app.module.ts      # Módulo principal
└── main.ts            # Arquivo de entrada
```

## 🔒 Segurança

- ✅ Passwords com hash bcryptjs (10 rounds)
- ✅ JWT tokens com expiração
- ✅ Guards para proteção de rotas
- ✅ Validação de entrada nos controladores
- ✅ CORS configurável

## 🧪 Testando a API

### Com cURL
```bash
# Registrar
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@example.com","password":"admin123"}'

# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Criar departamento (substitua TOKEN)
curl -X POST http://localhost:3000/departamento \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"descricao":"Eletrônicos"}'
```

### Com Postman
1. Importe o arquivo `postman_collection.json`
2. Configure as variáveis de ambiente
3. Teste todos os endpoints

## 🐛 Troubleshooting

### Erro de conexão ao MySQL
- Verifique se o MySQL está rodando
- Confirme as credenciais em `.env`
- Verifique se o banco existe

### Erro 401 - Não autenticado
- Faça login primeiro
- Copie o `access_token` da resposta
- Adicione `Authorization: Bearer TOKEN` no header

### Erro de compilação TypeScript
- Execute `npm install` para atualizar dependências
- Verifique se o Node.js está na versão 18+

## 📝 Próximos Passos Sugeridos

- [ ] Adicionar validação com class-validator
- [ ] Implementar paginação
- [ ] Adicionar filtros de busca
- [ ] Swagger/OpenAPI documentation
- [ ] Rate limiting
- [ ] Testes automatizados
- [ ] CI/CD pipeline
- [ ] Containerização Docker

## 📝 Licença

MIT