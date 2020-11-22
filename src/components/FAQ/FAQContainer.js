import {connect} from 'react-redux';
import FAQ from './FAQ';



const mapStateToProps = ({pages}) => ({
  content: pages.faq.content,
  title: pages.faq.title,
  image: pages.faq.image,
});

export default connect(mapStateToProps)(FAQ);