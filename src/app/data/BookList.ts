import { Books } from "../models/books"

export const BooksList: Books[] =[
    {
      "id": 1,
      "name": "Victor Hugo",
      "birthYear": 1802,
      "deathYear": 1885,
      "nationality": "French",
      "works": [
        {
          "title": "Les Misérables",
          "publicationYear": 1862,
          "genre": "Novel",
          "summary": "A story about the struggles of ex-convict Jean Valjean and his quest for redemption."
        },
        {
          "title": "Notre-Dame de Paris",
          "publicationYear": 1831,
          "genre": "Novel",
          "summary": "A tale of love and obsession set in medieval Paris, centered around the beautiful gypsy Esmeralda."
        }
      ]
    },
    {
      "id": 2,
      "name": "Jane Austen",
      "birthYear": 1775,
      "deathYear": 1817,
      "nationality": "British",
      "works": [
        {
          "title": "Pride and Prejudice",
          "publicationYear": 1813,
          "genre": "Novel",
          "summary": "A romantic novel that critiques the British landed gentry at the end of the 18th century."
        },
        {
          "title": "Sense and Sensibility",
          "publicationYear": 1811,
          "genre": "Novel",
          "summary": "A story about the lives and loves of the Dashwood sisters, Elinor and Marianne."
        }
      ]
    },
    {
      "id": 3,
      "name": "Gabriel García Márquez",
      "birthYear": 1927,
      "deathYear": 2014,
      "nationality": "Colombian",
      "works": [
        {
          "title": "One Hundred Years of Solitude",
          "publicationYear": 1967,
          "genre": "Magical Realism",
          "summary": "The multi-generational story of the Buendía family in the fictional town of Macondo."
        },
        {
          "title": "Love in the Time of Cholera",
          "publicationYear": 1985,
          "genre": "Novel",
          "summary": "A romantic tale that spans over fifty years, exploring themes of love and aging."
        }
      ]
    },
    {
      "id": 4,
      "name": "George Orwell",
      "birthYear": 1903,
      "deathYear": 1950,
      "nationality": ["British", "Indian"],
      "works": [
        {
          "title": "1984",
          "publicationYear": 1949,
          "genre": ["Dystopian", "Political Fiction"],
          "summary": "'1984' is a dystopian novel set in a totalitarian society ruled by Big Brother."
        },
        {
          "title": "Animal Farm",
          "publicationYear": 1945,
          "genre": ["Allegorical Novella"],
          "summary": "'Animal Farm' is an allegorical tale about farm animals who revolt against their human farmer."
        }
      ]
    }
  ]