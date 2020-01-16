'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tweets",
      [{
        "title": "aliquet",
        "content": "nisl duis ac nibh",
        "userId": 1
      }, {
        "title": "sit",
        "content": "et magnis dis parturient",
        "userId": 2
      }, {
        "title": "blandit",
        "content": "neque sapien placerat ante",
        "userId": 3
      }, {
        "title": "vel",
        "content": "imperdiet sapien urna pretium",
        "userId": 4
      }, {
        "title": "dictumst",
        "content": "nec nisi volutpat eleifend",
        "userId": 5
      }, {
        "title": "quis",
        "content": "eget eleifend luctus ultricies",
        "userId": 6
      }, {
        "title": "tincidunt",
        "content": "risus auctor sed tristique",
        "userId": 7
      }, {
        "title": "elementum",
        "content": "in libero ut massa",
        "userId": 8
      }, {
        "title": "purus",
        "content": "phasellus id sapien in",
        "userId": 9
      }, {
        "title": "dui",
        "content": "nibh in quis justo",
        "userId": 10
      }, {
        "title": "felis",
        "content": "varius nulla facilisi cras",
        "userId": 11
      }, {
        "title": "tellus",
        "content": "amet diam in magna",
        "userId": 12
      }, {
        "title": "at",
        "content": "aenean fermentum donec ut",
        "userId": 13
      }, {
        "title": "sit",
        "content": "vel augue vestibulum ante",
        "userId": 14
      }, {
        "title": "quis",
        "content": "in eleifend quam a",
        "userId": 15
      }, {
        "title": "morbi",
        "content": "et ultrices posuere cubilia",
        "userId": 16
      }, {
        "title": "in",
        "content": "volutpat eleifend donec ut",
        "userId": 17
      }, {
        "title": "faucibus",
        "content": "eget tempus vel pede",
        "userId": 18
      }, {
        "title": "molestie",
        "content": "dui luctus rutrum nulla",
        "userId": 19
      }, {
        "title": "nullam",
        "content": "fusce lacus purus aliquet",
        "userId": 20
      }, {
        "title": "tortor",
        "content": "ultrices posuere cubilia curae",
        "userId": 21
      }, {
        "title": "nulla",
        "content": "tristique est et tempus",
        "userId": 22
      }, {
        "title": "faucibus",
        "content": "sagittis dui vel nisl",
        "userId": 23
      }, {
        "title": "ipsum",
        "content": "platea dictumst morbi vestibulum",
        "userId": 24
      }, {
        "title": "pellentesque",
        "content": "nulla ut erat id",
        "userId": 25
      }, {
        "title": "luctus",
        "content": "purus phasellus in felis",
        "userId": 26
      }, {
        "title": "lacinia",
        "content": "morbi a ipsum integer",
        "userId": 27
      }, {
        "title": "metus",
        "content": "lacinia erat vestibulum sed",
        "userId": 28
      }, {
        "title": "ridiculus",
        "content": "non mi integer ac",
        "userId": 29
      }, {
        "title": "nibh",
        "content": "pretium iaculis diam erat",
        "userId": 30
      }, {
        "title": "pede",
        "content": "condimentum id luctus nec",
        "userId": 31
      }, {
        "title": "convallis",
        "content": "justo in hac habitasse",
        "userId": 32
      }, {
        "title": "nisl",
        "content": "orci pede venenatis non",
        "userId": 33
      }, {
        "title": "quam",
        "content": "libero quis orci nullam",
        "userId": 34
      }, {
        "title": "consectetuer",
        "content": "ipsum ac tellus semper",
        "userId": 35
      }, {
        "title": "in",
        "content": "consectetuer adipiscing elit proin",
        "userId": 36
      }, {
        "title": "id",
        "content": "habitasse platea dictumst aliquam",
        "userId": 37
      }, {
        "title": "platea",
        "content": "vehicula consequat morbi a",
        "userId": 38
      }, {
        "title": "non",
        "content": "at ipsum ac tellus",
        "userId": 39
      }, {
        "title": "quam",
        "content": "vel pede morbi porttitor",
        "userId": 40
      }, {
        "title": "pulvinar",
        "content": "lacus purus aliquet at",
        "userId": 41
      }, {
        "title": "condimentum",
        "content": "nec dui luctus rutrum",
        "userId": 42
      }, {
        "title": "quisque",
        "content": "amet sem fusce consequat",
        "userId": 43
      }, {
        "title": "mattis",
        "content": "felis donec semper sapien",
        "userId": 44
      }, {
        "title": "natoque",
        "content": "eget rutrum at lorem",
        "userId": 45
      }, {
        "title": "felis",
        "content": "suspendisse ornare consequat lectus",
        "userId": 46
      }, {
        "title": "rhoncus",
        "content": "id consequat in consequat",
        "userId": 47
      }, {
        "title": "condimentum",
        "content": "eleifend donec ut dolor",
        "userId": 48
      }, {
        "title": "posuere",
        "content": "est congue elementum in",
        "userId": 49
      }, {
        "title": "mauris",
        "content": "proin eu mi nulla",
        "userId": 50
      }, {
        "title": "lobortis",
        "content": "nec sem duis aliquam",
        "userId": 51
      }, {
        "title": "hac",
        "content": "pede lobortis ligula sit",
        "userId": 52
      }, {
        "title": "bibendum",
        "content": "id ligula suspendisse ornare",
        "userId": 53
      }, {
        "title": "erat",
        "content": "eu magna vulputate luctus",
        "userId": 54
      }, {
        "title": "primis",
        "content": "nulla tellus in sagittis",
        "userId": 55
      }, {
        "title": "morbi",
        "content": "proin risus praesent lectus",
        "userId": 56
      }, {
        "title": "amet",
        "content": "luctus rutrum nulla tellus",
        "userId": 57
      }, {
        "title": "duis",
        "content": "quam pede lobortis ligula",
        "userId": 58
      }, {
        "title": "suscipit",
        "content": "non velit donec diam",
        "userId": 59
      }, {
        "title": "vitae",
        "content": "at nulla suspendisse potenti",
        "userId": 60
      }, {
        "title": "vestibulum",
        "content": "quam suspendisse potenti nullam",
        "userId": 61
      }, {
        "title": "nibh",
        "content": "diam neque vestibulum eget",
        "userId": 62
      }, {
        "title": "lorem",
        "content": "erat eros viverra eget",
        "userId": 63
      }, {
        "title": "in",
        "content": "cubilia curae mauris viverra",
        "userId": 64
      }, {
        "title": "elementum",
        "content": "rutrum nulla nunc purus",
        "userId": 65
      }, {
        "title": "eu",
        "content": "sem fusce consequat nulla",
        "userId": 66
      }, {
        "title": "pretium",
        "content": "libero rutrum ac lobortis",
        "userId": 67
      }, {
        "title": "dolor",
        "content": "morbi porttitor lorem id",
        "userId": 68
      }, {
        "title": "nam",
        "content": "erat eros viverra eget",
        "userId": 69
      }, {
        "title": "libero",
        "content": "in faucibus orci luctus",
        "userId": 70
      }, {
        "title": "nisi",
        "content": "non interdum in ante",
        "userId": 71
      }, {
        "title": "lorem",
        "content": "etiam faucibus cursus urna",
        "userId": 72
      }, {
        "title": "augue",
        "content": "pulvinar sed nisl nunc",
        "userId": 73
      }, {
        "title": "justo",
        "content": "turpis sed ante vivamus",
        "userId": 74
      }, {
        "title": "vel",
        "content": "blandit mi in porttitor",
        "userId": 75
      }, {
        "title": "hendrerit",
        "content": "lobortis est phasellus sit",
        "userId": 76
      }, {
        "title": "donec",
        "content": "ultrices libero non mattis",
        "userId": 77
      }, {
        "title": "non",
        "content": "purus sit amet nulla",
        "userId": 78
      }, {
        "title": "velit",
        "content": "erat curabitur gravida nisi",
        "userId": 79
      }, {
        "title": "ullamcorper",
        "content": "ipsum primis in faucibus",
        "userId": 80
      }, {
        "title": "pulvinar",
        "content": "at lorem integer tincidunt",
        "userId": 81
      }, {
        "title": "erat",
        "content": "in felis donec semper",
        "userId": 82
      }, {
        "title": "eros",
        "content": "tincidunt ante vel ipsum",
        "userId": 83
      }, {
        "title": "phasellus",
        "content": "diam vitae quam suspendisse",
        "userId": 84
      }, {
        "title": "consectetuer",
        "content": "vel nisl duis ac",
        "userId": 85
      }, {
        "title": "nulla",
        "content": "turpis adipiscing lorem vitae",
        "userId": 86
      }, {
        "title": "ac",
        "content": "elementum nullam varius nulla",
        "userId": 87
      }, {
        "title": "sit",
        "content": "ipsum praesent blandit lacinia",
        "userId": 88
      }, {
        "title": "eleifend",
        "content": "sapien ut nunc vestibulum",
        "userId": 89
      }, {
        "title": "sapien",
        "content": "sit amet justo morbi",
        "userId": 90
      }, {
        "title": "vulputate",
        "content": "dis parturient montes nascetur",
        "userId": 91
      }, {
        "title": "ipsum",
        "content": "rutrum nulla tellus in",
        "userId": 92
      }, {
        "title": "volutpat",
        "content": "elit ac nulla sed",
        "userId": 93
      }, {
        "title": "at",
        "content": "malesuada in imperdiet et",
        "userId": 94
      }, {
        "title": "felis",
        "content": "metus arcu adipiscing molestie",
        "userId": 95
      }, {
        "title": "est",
        "content": "at velit vivamus vel",
        "userId": 96
      }, {
        "title": "sociis",
        "content": "dictumst etiam faucibus cursus",
        "userId": 97
      }, {
        "title": "potenti",
        "content": "bibendum imperdiet nullam orci",
        "userId": 98
      }, {
        "title": "turpis",
        "content": "sollicitudin ut suscipit a",
        "userId": 99
      }, {
        "title": "lectus",
        "content": "ac consequat metus sapien",
        "userId": 100
      }],
    {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tweets", null, {});
  }
};
