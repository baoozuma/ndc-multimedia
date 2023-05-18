import React, { Component } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from '../contentDatabase/itemData';
import ImageListItemBar from '@mui/material/ImageListItemBar';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  checkWidth() {
    const { width } = this.state;
    return width >= 960 ? 4 : 2;
  }

  render() {
    return (
      <div className="gallery" data-aos="fade-right"  data-aos-once="true" data-aos-duration="500"  data-aos-easing="ease-in-out">
        <h1><strong>Artistic Showcase:</strong> The Gallery Display</h1>
        <Box sx={{ overflowY: 'scroll' }} className='gallery_list'>
          <ImageList variant="masonry" cols={this.checkWidth()} gap={7}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>by: {item.author}</span>}
                  position="top"
                  className='itembar'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    );
  }
}

export default Gallery;
