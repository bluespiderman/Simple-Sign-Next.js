import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

const Index = () => (
  <Layout title="Home">
    <h2 className="title is-2"> A Gift to Shannon. Lifehiker</h2>
    <img src="/static/nextjs.jpg" />
    <p>
      bluespider@gmail.com.
    </p>
  </Layout>
);

Index.getInitialProps = function (ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);
