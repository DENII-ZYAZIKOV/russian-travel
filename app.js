const chessChampions = [
    ['Хосе-рауль Капабланка', 1921],
    ['Михаил Таль', 1960],
    ['Тигран Петросян', 1963],
    ['Василий Смыслов', 1957],
    ['Александр Алехин', 1937],
    ['Вильгельм Стейниц', 1886],
    ['Михаил Ботвинник', 1961],
    ['Михаил Ботвинник', 1948],
    ['Магнус Карлсен', 2013],
    ['Владимир Крамник', 2006],
    ['Макс Эйве', 1935],
    ['Михаил Ботвинник', 1958],
    ['Борис Спасский', 1969],
    ['Эммануил Ласкер', 1894],
    ['Гарри Каспаров', 1985],
    ['Вишванатан Ананд', 2007],
    ['Анатолий Карпов', 1975],
    ['Роберт Фишер', 1972],
    ['Александр Алехин', 1927]
  ];
  
  // Опишите алгоритм сортировки тут
  chessChampions.sort((a,b) => a[1] - b[1]);
  
  
  console.log(chessChampions);
  