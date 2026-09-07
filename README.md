# KodexBase Website

Site institucional e comercial da KodexBase, desenvolvido com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e configure:

- `RESEND_API_KEY`: chave usada pelo formulário de contato.
- `CONTACT_EMAIL`: endereço que recebe os diagnósticos.
- `NEXT_PUBLIC_SITE_URL`: URL canônica do ambiente publicado.

## Verificação

```bash
npm run build
```

O site público está em [kodexbase.vercel.app](https://kodexbase.vercel.app/).
