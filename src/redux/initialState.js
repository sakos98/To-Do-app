const initialState = {

  columns: [
    {
      id: '1',
      title: 'Fantasy',
      icon: 'book',
      listId: '1',
    },
    {
      id: '2',
      title: 'Criminal',
      icon: 'book',
      listId: '1',
    },
    {
      id: '3',
      title: 'History',
      icon: 'book',
      listId: '1',
    },
    {
      id: '4',
      title: 'Platform',
      icon: 'gamepad',
      listId: '2',
    },
    {
      id: '5',
      title: 'RPG',
      icon: 'gamepad',
      listId: '2',
    },
    {
      id: '6',
      title: 'Races',
      icon: 'gamepad',
      listId: '2',
    },
  ],

  cards: [
    { id: 1, columnId: '1', title: 'Harry Potter', isFavorite: false },
    { id: 2, columnId: '1', title: 'The Witcher', isFavorite: false },
    { id: 3, columnId: '2', title: 'Sherlock Holmes', isFavorite: false },
    { id: 4, columnId: '2', title: 'The secret history: Tartt Donna', isFavorite: false },
    { id: 5, columnId: '3', title: 'Napoleon: A life', isFavorite: false },
    { id: 6, columnId: '3', title: 'Vatican: Dark history global power', isFavorite: false },
    { id: 7, columnId: '4', title: 'Sonic the Hedgehog', isFavorite: false },
    { id: 8, columnId: '4', title: 'Jump King', isFavorite: false },
    { id: 9, columnId: '4', title: 'Mario Forever', isFavorite: false },
    { id: 10, columnId: '5', title: 'Witcher 3', isFavorite: false },
    { id: 11, columnId: '5', title: 'Cyberpunk 2077', isFavorite: false },
    { id: 12, columnId: '6', title: 'Need For Speed Most Wanted 2005', isFavorite: false },
    { id: 13, columnId: '6', title: 'Forza Horizon 5', isFavorite: false },



    
  ],

  searchString: '',

  lists: [
    {
      id: '1',
      title: 'Books',
      description: 'Propose someone interesting books'
    },
    {
      id: '2',
      title: 'Games',
      description: 'The best games for long evening'
    }
  ],

};

export default initialState;