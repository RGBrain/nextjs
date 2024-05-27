      import LikeButton from "./like-button";


      function Header({ title }) {
        return <h1>{title ? title : 'Default Title'}</h1>;
      }

      export default function HomePage() {
        const names = ['Georgia', 'Jacob', 'Sienna'];

        return (
          <div>
            <Header title="Text passed in as props" />
            <Header title="Different text passed as props" />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            < LikeButton />
        </div>
        );
      }

