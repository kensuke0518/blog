import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout header="Next" title="ここはOtherページです。">
        <h1>Next.js</h1>
        <div>ここはOtherページです</div>
        <div>
            <Link href="./">
                <a>indexページへ飛ぶ</a>
            </Link>
        </div>
    </Layout>
);