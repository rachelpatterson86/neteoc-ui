let MenuFactory = function (Auth) {
  const menu = {
    main: {
      display: "NetEOC",
      items: [
      ],
      privateItems: [
      ]
    }

  }

  let getMenu = (name) => {

    

    return menu[name];
  };

  let createMenu = () => {

  };

  let addToMainMenu = (item) => {

      if(item.requireLogin){
        menu.main.privateItems.push(item)
      }else {
        menu.main.items.push(item)
      }

  };


  return { getMenu, addToMainMenu };
};

MenuFactory.$inject = ['Auth']
export default MenuFactory;
