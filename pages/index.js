import Link from 'next/link';
import Counter from '../components/Counter';
import styles from '../test.module.css';
import Layout from '../components/Layout';

export default () => (
    <Layout header="Next" title="ここはindexページです。">
        <h1 className={styles.error}>Next.js</h1>
        <div>こんにちは</div>
        <div>
            <Link href="./other">
                <a>Otherページへ飛ぶ</a>
            </Link>
        </div>
        <Counter />
    </Layout>
);