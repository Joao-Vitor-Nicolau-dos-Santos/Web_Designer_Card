# 🌟 Componente de card reutilizavel

Este repositório contém um **componente visual reutilizável de card de perfil**, construído com **Next.js** e **Tailwind CSS**. Ideal para interfaces de usuários em aplicações que exibem perfis com informações visuais e interativas.

## 🔗 Link: 
https://web-designer-card-a2z4.vercel.app

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)

## 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
pnpm install
```

Execução:
```bash
pnpm dev
```

## 🧱 Uso do Componente
Você pode importar e usar o ProfileCard passando as props abaixo:

Exemplo de uso:
```bash
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="p-4">
      <ProfileCard
        name="Camila Andrade"
        title="Chief Sustainability Officer"
        countryCode="BR"
        compatibility={97}
        skills={['Engajamento de Stakeholders', 'ESG Reporting']}
        avatarUrl="/camila.jpg"
        onMessageClick={() => alert("Mensagem enviada")}
        onInviteClick={() => alert("Convite enviado")}
      />
    </div>
  );
}
```

## 🎨 Estilo e Interatividade
Cores e espaçamentos fiéis ao design fornecido

Botões com efeito hover (zoom + mudança de cor)

Responsivo e pronto para ser reutilizado
