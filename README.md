# County Data

> Centers for Disease Control and Prevention's Information Viewer (2004-2013)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Docker Automated build](https://img.shields.io/docker/automated/jrottenberg/ffmpeg.svg)](sasalatart/county-data)
[![](https://images.microbadger.com/badges/version/sasalatart/county-data.svg)](https://microbadger.com/images/sasalatart/county-data)
[![](https://images.microbadger.com/badges/image/sasalatart/county-data.svg)](https://microbadger.com/images/sasalatart/county-data)
[![Code Climate](https://codeclimate.com/github/sasalatart/county-data/badges/gpa.svg)](https://codeclimate.com/github/sasalatart/county-data)

## About

This is an application built with [ExpressJS](https://expressjs.com/) and [React/Redux](https://facebook.github.io/react/) that presents County Data Indicators regarding diabetes collected by the [CDC](https://www.cdc.gov/diabetes/data/countydata/countydataindicators.html) between 2004 and 2013.

## API Usage

#### Counties Index

Returns paginated counties with no specific filtering.

- **URL:** `GET /api/counties`

- **Success Response:**
  - **Code:** 200
  - **Example content:**
  ```javascript
    counties: {
      docs: [
        {
          _id: "591b887662794d376bf85830",
          state: "Alabama",
          fipsCode: "01001",
          name: "Autauga County"
        }, {
          _id: "591b887662794d376bf85868",
          state: "Alabama",
          fipsCode: "01003",
          name: "Baldwin County"
        }, {
          _id: "591b887662794d376bf858a0",
          state: "Alabama",
          fipsCode: "01005",
          name: "Barbour County"
        }, {
          ...
        }
      ],
      total: 3224,
      limit: 25,
      page: 1,
      pages: 129
    }
  ```

#### Search By Name

Searches counties containing a specific name (case-insensitive), and returns them in a paginated way.

- **URL:** `GET /api/counties/search/:name`

- **URL Params**
  - `name`: name, or part of a name, to filter counties with.

- **Success Response:**
  - **Code:** 200
  - **Example content:**
  ```javascript
    counties: {
      docs: [
        {
          _id: "591b887762794d376bf8aa83",
          state: "Florida",
          fipsCode: "12115",
          name: "Sarasota County"
        }, {
          _id: "591b887b62794d376bf97b6b",
          state: "Minnesota",
          fipsCode: "27037",
          name: "Dakota County"
        }, {
          _id: "591b887d62794d376bfa0493",
          state: "North Carolina",
          fipsCode: "37139",
          name: "Pasquotank County"
        }, {
          ...
        }
      ],
      total: 4,
      limit: 25,
      page: 1,
      pages: 1
    }
  ```

#### Show County

Returns the specified county.

- **URL:** `GET /api/counties/:id`

- **URL Params**
  - `id`: id of the requested county.

- **Success Response:**
  - **Code:** 200
  - **Example content:**
  ```javascript
    county: {
      _id: "591b887b62794d376bf97b6b",
      state: "Minnesota",
      fipsCode: "27037",
      name: "Dakota County",
      __v: 0,
      statistics: {
        obesityPrevalenceBySex: [
          {
            year: 2009,
            maleNumber: 40455,
            malePercent: 29,
            maleLowerConfidenceLimit: 25.9,
            maleUpperConfidenceLimit: 32.4,
            maleAgeAdjustedPercent: 28.5,
            maleAgeAdjustedLowerConfidenceLimit: 25.5,
            maleAgeAdjustedUpperConfidenceLimit: 31.9,
            femaleNumber: 34579,
            femalePercent: 23.9,
            femaleLowerConfidenceLimit: 21.2,
            femaleUpperConfidenceLimit: 26.9,
            femaleAgeAdjustedPercent: 23.5,
            femaleAgeAdjustedLowerConfidenceLimit: 20.8,
            femaleAgeAdjustedUpperConfidenceLimit: 26.5,
            _id: "591b887b62794d376bf97b70"
          }, {
            ...
          }
        ],
        obesityPrevalence: [...],
        leisureTimePhysicalInactivityPrevalenceBySex: [...],
        diagnosedDiabetesIncidence: [...],
        diagnosedDiabetesPrevalenceBySex: [...],
        diagnosedDiabetesPrevalence: [...]
      }
    }
  ```


## Setup

#### Development

1. Clone and cd into this repository
2. run `npm install` (or `yarn install`)
3. Export the environment variables `MONGODB_HOST` and `MONGODB_PORT` (27017 by default), or alternatively `MONGODB_URI`.
4. Turn on your local mongodb server if that is the case.
5. run `nodemon server/index.js` (turns on the backend server)
6. run `npm run startDev` (turns on the frontend development server)

#### Docker

```sh
# Pull and run the application and mongodb
$ docker run -d --name=mongo_db mongo:3.0.15

$ docker run -d --name=countydata -p 80:9000 --link=mongo_db:mongo_db sasalatart/county-data

# Setup the database
$ docker exec countydata npm run seed
```

The server's machine should now be redirecting its port 80 to the container's port 9000.

## Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'add my feature'`)
4. Push to your feature branch (`git push origin my-new-feature`)
5. Create a new Pull Request
