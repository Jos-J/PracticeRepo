CREATE TABLE Songs (
    ID INT,
    Title VARCHAR(60),
    Artist VARCHAR(60),
    ReleaseYear INT,
    Genre VARCHAR(20),
    PRIMARY KEY (ID)
     );

     INSERT INTO Songs VALUES
     (100, 'Hey Jude', 'Beatles', 1968, 'pop rock'),
     (200, 'You Belong With Me', 'Taylor Swift', 2008, 'country pop'),
     (300, 'You are Still the One', 'Shania Twain', 1998, 'country pop'),
     (400, 'Need You Now', 'Lady Antebellum', 2011, 'country pop'),
     (500, 'You have Lost That Lovin Feeling', 'The Righteous Brothers', 1964, 'R&B'),
     (600, 'That is The Way Love Goes', 'Janet Jackson', 1993, 'R&B'),
     (700, 'Smells Like Teen Spirit', 'Nirvana', 1991, 'grunge'),
     (800, 'Even Flow', 'Pearl Jam', 1992, 'grunge'),
     (900, 'Black Hole Sun', 'Soundgarden', 1994, 'grunge');