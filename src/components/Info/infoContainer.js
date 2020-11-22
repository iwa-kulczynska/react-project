import {connect} from 'react-redux';
import Info from './Info';



const mapStateToProps = ({pages}) => ({
  content: pages.info.content,
  title: pages.info.title,
  image: pages.info.image,
});

export default connect(mapStateToProps)(Info);