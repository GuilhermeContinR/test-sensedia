import React from 'react';
import Post from '../../services/Post';


describe('List component', () => {


  it('should return 200 Status', async () => {
    const response = await Post.getPost();
    expect(response).toBeDefined();
    expect(response.status).toEqual(200);
});

});
