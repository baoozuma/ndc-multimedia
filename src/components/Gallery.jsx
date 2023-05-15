import React, { Component } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {itemData} from '../contentDatabase/itemData';
import ImageListItemBar from '@mui/material/ImageListItemBar';
class Gellery extends Component {
    render() {
        return(
            <div className="gallery">
            <h1>Gallery Display</h1>
            <Box sx={{overflowY: 'scroll' }} className='gallery_list'>
            <ImageList variant="masonry" cols={4} gap={7}>
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
                position="below"
                className='itembar'
                />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
            </div>

        )
    }
}

export default Gellery;