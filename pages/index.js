import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = () => (
    // Wrapping everything in the layout component
    <Layout>
         <div>
            <h1>Hello Next.js</h1>
        </div>
    </Layout>
   
);

// Fetch Req for CoinDesk API
Index.getInitialProps = async function(){

    // res
    const res = await fetch
    (`https://api.coindesk.com/v1/bpi/currentprice.json`);
    
    // JSon data
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}

export default Index;