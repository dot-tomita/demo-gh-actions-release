import styles from '../styles/Home.module.css';

export async function getStaticProps(context) {
  const hoge = 'Hello!';
  return {
    props: {
      hoge,
    },
  };
}

export default function Home({ hoge }) {
  return (
    <>
      <div className="container">
        <h1>{hoge} world!!</h1>
        <p>こんにちは！！！</p>
        <p>このpushがマージされればworkflowは実行されるはず</p>
      </div>
    </>
  );
}
