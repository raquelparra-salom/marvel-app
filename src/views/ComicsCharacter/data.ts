import { Character } from '../CharacterList/interfaces';
import { ComicsCharacterResponse } from './interfaces';

export const DataComic: ComicsCharacterResponse = {
  code: 200,
  status: 'Ok',
  copyright: '© 2024 MARVEL',
  attributionText: 'Data provided by Marvel. © 2024 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: '50374154af5ab7d834f4bd2e25073c61d7600a5d',
  data: {
    offset: 0,
    limit: 20,
    total: 53,
    count: 20,
    results: [
      {
        id: 103120,
        digitalId: 62364,
        title: 'Who Is...? M.O.D.O.K. Infinity Comic (2023) #1',
        issueNumber: 1,
        variantDescription: '',
        description: '',
        modified: '2023-02-13T01:17:35-0500',
        isbn: '',
        upc: '75960620274401311',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 4,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Leader of A.I.M., foe of the Avengers—these are but a fraction of the identifiers that correlate to the Mental Organism Designed Only For Killing. Get ready for re-programming as you submit the query: WHO IS M.O.D.O.K.?',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/103120',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/103120/who_is._modok_infinity_comic_2023_1?utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=62364&utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/35554',
          name: 'Who Is...? M.O.D.O.K. Infinity Comic (2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2023-02-17T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2023-01-16T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2023-02-17T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/00/63bd9786689b9',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/00/63bd9786689b9',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/103120/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12313',
              name: 'Mark Basso',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/14120',
              name: 'Jordan Blum',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13280',
              name: 'Damian Couceiro',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10172',
              name: 'Vc Clayton Cowles',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12991',
              name: 'Rachelle Rosenberg',
              role: 'colorist',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/103120/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
              name: 'A.I.M.',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010726',
              name: 'M.O.D.O.K.',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/103120/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/227343',
              name: 'cover from Who Is…? M.O.D.O.K. Infinity Comic (2023) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/227344',
              name: 'story from Who Is…? M.O.D.O.K. Infinity Comic (2023) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/103120/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 103371,
        digitalId: 61136,
        title: 'Avengers Unlimited Infinity Comic (2022) #17',
        issueNumber: 17,
        variantDescription: '',
        description: '',
        modified: '2022-10-21T13:23:03-0400',
        isbn: '',
        upc: '75960620473101711',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 6,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: '"Sabotage" Part One: While exploring making an investment in Project: P.E.G.A.S.U.S., Tony Stark is separated from his armor when A.I.M. attacks the installation!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/103371',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/103371/avengers_unlimited_infinity_comic_2022_17?utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=61136&utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/35600',
          name: 'Avengers Unlimited Infinity Comic (2022 - 2023)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2022-10-25T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2022-09-26T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2022-10-25T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/00/631f5ddd865fe',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/00/631f5ddd865fe',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/103371/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/14464',
              name: 'Jeremy Adams',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/656',
              name: 'Dante Bastianoni',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8775',
              name: 'Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13449',
              name: 'Chris Sotomayor',
              role: 'colorist',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/103371/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
              name: 'A.I.M.',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/103371/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/227845',
              name: 'cover from Avengers Unlimited Infinity Comic (2022) #17',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/227846',
              name: 'story from Avengers Unlimited Infinity Comic (2022) #17',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/103371/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 92308,
        digitalId: 57136,
        title: 'X-Men Unlimited Infinity Comic (2021) #2',
        issueNumber: 2,
        variantDescription: '',
        description: '',
        modified: '2021-09-07T17:11:07-0400',
        isbn: '',
        upc: '75960620046700211',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 12,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Wolverine takes A.I.M. to save a missing mutant! The Infinity Comics adventure by Jonathan Hickman and Declan Shalvey continues!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/92308',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/92308/x-men_unlimited_infinity_comic_2021_2?utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/X-Men-Unlimited-Infinity-Comic-2/digital-comic/57136?utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=57136&utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/31573',
          name: 'X-Men Unlimited Infinity Comic (2021 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2021-09-02T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2021-08-09T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2021-09-02T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-07-14T10:42:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/30/611e6f42d0681',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/30/611e6f42d0681',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/92308/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11743',
              name: 'Jonathan Hickman',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11354',
              name: 'Declan Shalvey',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8822',
              name: 'Jordan D. White',
              role: 'editor',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/92308/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
              name: 'A.I.M.',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/92308/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/205700',
              name: 'cover from X-Men Vertical Comic (2021) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/205701',
              name: 'story from X-Men Vertical Comic (2021) #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/92308/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 92307,
        digitalId: 57481,
        title: 'X-Men Unlimited Infinity Comic (2021) #1',
        issueNumber: 1,
        variantDescription: '',
        description: '',
        modified: '2021-09-07T17:10:39-0400',
        isbn: '',
        upc: '75960620046700111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digital Vertical Comic',
        pageCount: 12,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'The mutants of earth have risen up and founded the nation of Krakoa… but that has not meant any less trouble for them. An all-star cast of creators bring you rotating adventures of the various mutants of the world and their friends and allies!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/92307',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/92307/x-men_unlimited_infinity_comic_2021_1?utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/X-Men-Unlimited-Infinity-Comic-1/digital-comic/57481?utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=57481&utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/31573',
          name: 'X-Men Unlimited Infinity Comic (2021 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2021-09-02T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2021-08-09T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2021-09-02T00:00:00-0400',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2023-07-14T10:42:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/10/611e6f42d016f',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/10/611e6f42d016f',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/92307/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11743',
              name: 'Jonathan Hickman',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11354',
              name: 'Declan Shalvey',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8822',
              name: 'Jordan D. White',
              role: 'editor',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/92307/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
              name: 'A.I.M.',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/92307/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/205698',
              name: 'cover from X-Men Vertical Comic (2021) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/205699',
              name: 'story from X-Men Vertical Comic (2021) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/92307/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
};

export const DataCharacter: Character = {
  id: 1009144,
  name: 'A.I.M.',
  description: 'AIM is a terrorist organization bent on destroying the world.',
  modified: '2013-10-17T14:41:30-0400',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
    extension: 'jpg',
  },
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
  comics: {
    available: 53,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009144/comics',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/36763',
        name: 'Ant-Man & the Wasp (2010) #3',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/17553',
        name: 'Avengers (1998) #67',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/7340',
        name: 'Avengers (1963) #87',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/4214',
        name: 'Avengers and Power Pack Assemble! (2006) #2',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/63217',
        name: 'Avengers and Power Pack (2017) #3',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/63218',
        name: 'Avengers and Power Pack (2017) #4',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/63219',
        name: 'Avengers and Power Pack (2017) #5',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/63220',
        name: 'Avengers and Power Pack (2017) #6',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/64790',
        name: 'AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (Trade Paperback)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/103371',
        name: 'Avengers Unlimited Infinity Comic (2022) #17',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1170',
        name: 'Avengers Vol. 2: Red Zone (Trade Paperback)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1214',
        name: 'Avengers Vol. II: Red Zone (Trade Paperback)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/12787',
        name: 'Captain America (1998) #28',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/7513',
        name: 'Captain America (1968) #132',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/7514',
        name: 'Captain America (1968) #133',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/65466',
        name: 'Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/20367',
        name: 'Defenders (1972) #57',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/31068',
        name: 'Incredible Hulks (2010) #606 (VARIANT)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/46168',
        name: 'Indestructible Hulk (2012) #3',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/43944',
        name: 'Iron Man (2012) #1',
      },
    ],
    returned: 20,
  },
  series: {
    available: 36,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009144/series',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/13082',
        name: 'Ant-Man & the Wasp (2010 - 2011)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
        name: 'Avengers (1998 - 2004)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
        name: 'Avengers (1963 - 1996)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/23123',
        name: 'Avengers and Power Pack (2017)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/1046',
        name: 'Avengers and Power Pack Assemble! (2006)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/27689',
        name: 'AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (2017)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/35600',
        name: 'Avengers Unlimited Infinity Comic (2022 - 2023)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/227',
        name: 'Avengers Vol. 2: Red Zone (2003)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/271',
        name: 'Avengers Vol. II: Red Zone (2003)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/1997',
        name: 'Captain America (1998 - 2002)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/1996',
        name: 'Captain America (1968 - 1996)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/23810',
        name: 'Captain America by Mark Waid, Ron Garney & Andy Kubert (2017)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
        name: 'Defenders (1972 - 1986)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/8842',
        name: 'Incredible Hulks (2010 - 2011)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/16583',
        name: 'Indestructible Hulk (2012 - 2014)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/2029',
        name: 'Iron Man (1968 - 1996)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/16593',
        name: 'Iron Man (2012 - 2014)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/23915',
        name: 'Iron Man Epic Collection: Doom (2018)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/9718',
        name: 'Marvel Adventures Super Heroes (2010 - 2012)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/189',
        name: 'Marvel Masterworks: Captain America Vol. 1 - 2nd Edition (2003)',
      },
    ],
    returned: 20,
  },
  stories: {
    available: 57,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009144/stories',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/5800',
        name: 'Avengers and Power Pack Assemble! (2006) #2',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/5801',
        name: '2 of 4 - 4XLS',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/10253',
        name: 'When the Unliving Strike',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/10255',
        name: 'Cover #10255',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/10256',
        name: 'The Enemy Within!',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/10259',
        name: 'Death Before Dishonor!',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/10261',
        name: 'Cover #10261',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/10262',
        name: 'The End of A.I.M.!',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/11921',
        name: 'The Red Skull Lives!',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/11930',
        name: 'He Who Holds the Cosmic Cube',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/11936',
        name: 'The Maddening Mystery of the Inconceivable Adaptoid!',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/11981',
        name: 'If This Be... Modok',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/11984',
        name: 'A Time to Die -- A Time to Live!',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/11995',
        name: 'At the Mercy of the Maggia',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/15243',
        name: 'Look Homeward, Avenger',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/17518',
        name: 'Captain America (1968) #132',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/17519',
        name: 'The Fearful Secret of Bucky Barnes',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/17520',
        name: 'Captain America (1968) #133',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/17521',
        name: 'Madness In the Slums',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/28233',
        name: 'In Sin Airy X',
        type: 'interiorStory',
      },
    ],
    returned: 20,
  },
  events: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009144/events',
    items: [],
    returned: 0,
  },
  urls: [
    {
      type: 'detail',
      url: 'http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
    },
    {
      type: 'wiki',
      url: 'http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
    },
    {
      type: 'comiclink',
      url: 'http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=597047c899feefeca0d65802fd229216',
    },
  ],
};
