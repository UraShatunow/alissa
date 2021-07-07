export default class DummyService {

    _cards = [
      {
        id: 1,
        heading: 'The holiday special',
        text: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading',
        imgUrl: 'https://static.wixstatic.com/media/495dbf5ead054840a9b405f5b8e55af3.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90/495dbf5ead054840a9b405f5b8e55af3.webp'
      },
  
      {
        id: 2,
        heading: 'Simple backdrops for food shots',
        text: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading',
        imgUrl: 'https://static.wixstatic.com/media/cd1da2d221ec4d71af4e3ed305010c7c.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90/cd1da2d221ec4d71af4e3ed305010c7c.webp'
      },

      {
        id: 3,
        heading: 'Before the drip',
        text: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading',
        imgUrl: 'https://static.wixstatic.com/media/ce9814ce9f304fd6a9ae1bb862863c81.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90/ce9814ce9f304fd6a9ae1bb862863c81.webp'
      },

      {
        id: 4,
        heading: 'Styling your shots',
        text: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading',
        imgUrl: 'https://static.wixstatic.com/media/57a7b875930547cdb003bc37b6713574.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90/57a7b875930547cdb003bc37b6713574.webp'
      },

      {
        id: 5,
        heading: 'The perfect sizzle',
        text: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading',
        imgUrl: 'https://static.wixstatic.com/media/9e01dfb9a15749e482e69dbc82886703.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90/9e01dfb9a15749e482e69dbc82886703.webp'
      },

      {
        id: 6,
        heading: 'Eating with your eyes first',
        text: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading',
        imgUrl: 'https://static.wixstatic.com/media/c4f7ff68441b408eb753f40e1ba38756.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90/c4f7ff68441b408eb753f40e1ba38756.webp'
      },

    ];
  
  
    getAllCards = async () => {
      return this._cards;
    };
  
  }
  