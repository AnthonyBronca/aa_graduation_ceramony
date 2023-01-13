


const students = [
  { name: "Samuel Bae", imageUrl: "https://avatars.githubusercontent.com/u/95676094?v=4" },
  { name: "Eleanor Billerbeck", imageUrl: "https://avatars.githubusercontent.com/u/88410789?v=4" },
  { name: "Kaitlin Cizewski", imageUrl: "https://avatars.githubusercontent.com/u/93219041?v=4" },
  { name: "Mariel Vaca Cruz", imageUrl: "https://newtwiller.s3.us-east-1.amazonaws.com/BF9B78A7-EEFB-4D7F-B971-92E2CCBDDE35.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLWVhc3QtMSJIMEYCIQC%2BAyvXrVySxdTW%2BjZX87TL3ENODy4otTmF69CnZQfiQgIhAIydVBkl%2FOYb1Vl1RT7kQybIzvv4INlZjxSLIb4Tqi0GKu0CCMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNDgyODUzMzMxNTIyIgwdCSlKWd31TuTTJ80qwQJl9Mn2pdTS1PwYZ5qxREbQcoFKw5qCOdQtUx2zi8dCbUB3cXz3MuuTVINxcz2ySvlRpYrkTE0wu2QhpVDKo5yAtQ0kdM0hGxk0TFYl%2F39%2BLfwXxr7ffOm2EmHx9KGcg%2BJoPMp4SJ5XGoILzwjYdYQ0XPg9d4GhU4jVRfWe7Lb3h7El6rA6T7NTF2%2F%2ByhPPvZPMUdFWjco5e4zPWc%2B3b0p6l%2FLM%2BGU3HHWD%2Fcftnz3eDDvClo1U3%2BadW4i8pRlnQXiGb9ekZLgtS6W3V6MsfzcJNQfQ2pRwFVssc4EpbRJ4HUEa10hvOKEkj6r9PM0Yc4UGINDenMw2R%2FmbkeDUI%2Bv1L%2F9tIb9OyYJO2OF38p7U7Npo3qy%2BAe06fc4rT%2FDLVlTijZ06et3mIVa6qH1gVOzcTXls%2FX4kMmK2585hWQazKvsw9bKCngY6sgI%2B49BJDBo1bjwex9aEjs1JA87mX0Q898rA1JpHgGZ7eLhXXSWHxRXonrp9zndEW1mHGOR%2Fr3QgkAnq3cVABuWXDNG6iymBl5rCGp5oQNn3pcJkWlfdGOMaDv8El%2F7jwg2%2FtCsLjY32IdBTYaAQQbnzyDkR%2BHGOgvmawSY9mrCrc8KW5VSAolipHPp3j9AiPCfgp1fXiLX26WZ2kUnd2izyADkgnd57Ynb1TxGb7I1MQxMQzgmyA8pFpZVoTAB%2FQZ7CftrZBMvd%2Fii3n6DsgdHkRUkPChEwf1VAdqt62ZT6kkmKygpAO73nPWKG%2FT%2BzDhEAmOg%2FIm9Kcq8tsvv7l%2FHF%2FLnCg3VjjJegtS9BskXN9lxWJ1wKrFP8RXcZdb3ilUH28uE5tSwjD6Zt7%2F%2FNN80VrX4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230113T004147Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXA3CNEJBMHZGCW7W%2F20230113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1f29c3f038fd249482ae5b0f59e828e3c07925d8fccfb686f30bc941030871ed" },
  { name: "Isaac Darzi", imageUrl: "https://newtwiller.s3.us-east-1.amazonaws.com/IMG_4146%20%281%29.JPG?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLWVhc3QtMSJIMEYCIQC%2BAyvXrVySxdTW%2BjZX87TL3ENODy4otTmF69CnZQfiQgIhAIydVBkl%2FOYb1Vl1RT7kQybIzvv4INlZjxSLIb4Tqi0GKu0CCMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNDgyODUzMzMxNTIyIgwdCSlKWd31TuTTJ80qwQJl9Mn2pdTS1PwYZ5qxREbQcoFKw5qCOdQtUx2zi8dCbUB3cXz3MuuTVINxcz2ySvlRpYrkTE0wu2QhpVDKo5yAtQ0kdM0hGxk0TFYl%2F39%2BLfwXxr7ffOm2EmHx9KGcg%2BJoPMp4SJ5XGoILzwjYdYQ0XPg9d4GhU4jVRfWe7Lb3h7El6rA6T7NTF2%2F%2ByhPPvZPMUdFWjco5e4zPWc%2B3b0p6l%2FLM%2BGU3HHWD%2Fcftnz3eDDvClo1U3%2BadW4i8pRlnQXiGb9ekZLgtS6W3V6MsfzcJNQfQ2pRwFVssc4EpbRJ4HUEa10hvOKEkj6r9PM0Yc4UGINDenMw2R%2FmbkeDUI%2Bv1L%2F9tIb9OyYJO2OF38p7U7Npo3qy%2BAe06fc4rT%2FDLVlTijZ06et3mIVa6qH1gVOzcTXls%2FX4kMmK2585hWQazKvsw9bKCngY6sgI%2B49BJDBo1bjwex9aEjs1JA87mX0Q898rA1JpHgGZ7eLhXXSWHxRXonrp9zndEW1mHGOR%2Fr3QgkAnq3cVABuWXDNG6iymBl5rCGp5oQNn3pcJkWlfdGOMaDv8El%2F7jwg2%2FtCsLjY32IdBTYaAQQbnzyDkR%2BHGOgvmawSY9mrCrc8KW5VSAolipHPp3j9AiPCfgp1fXiLX26WZ2kUnd2izyADkgnd57Ynb1TxGb7I1MQxMQzgmyA8pFpZVoTAB%2FQZ7CftrZBMvd%2Fii3n6DsgdHkRUkPChEwf1VAdqt62ZT6kkmKygpAO73nPWKG%2FT%2BzDhEAmOg%2FIm9Kcq8tsvv7l%2FHF%2FLnCg3VjjJegtS9BskXN9lxWJ1wKrFP8RXcZdb3ilUH28uE5tSwjD6Zt7%2F%2FNN80VrX4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230113T004303Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXA3CNEJBMHZGCW7W%2F20230113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e213722f442f5982b0fe949a9a2ea99bff2e65c310b7b4ad7b20d917bac3bef6" },
  { name: "Theo Fandrich", imageUrl: "https://avatars.githubusercontent.com/u/91796072?v=4" },
  { name: "Austin Fenne", imageUrl: "https://avatars.githubusercontent.com/u/90361430?v=4" },
  { name: "Keith Glines", imageUrl: "https://avatars.githubusercontent.com/u/65455404?v=4" },
  { name: "Sungmin Lee", imageUrl: "https://avatars.githubusercontent.com/u/92840279?v=4" },
  { name: "Alan De Leon", imageUrl: "https://avatars.githubusercontent.com/u/92609467?v=4" },
  { name: "Peter Monahan", imageUrl: "https://ca.slack-edge.com/T03GU501J-U02SY38FURJ-65588e7a56a5-192" },
  { name: "Brian Moore", imageUrl: "https://cdn1.vectorstock.com/i/1000x1000/56/00/avatar-photo-or-profile-photo-placeholder-icon-vector-37925600.jpg" },
  { name: "Andrew Parks", imageUrl: "https://avatars.githubusercontent.com/u/78670241?v=4" },
  { name: "Chawin Pathompornvival", imageUrl: "https://avatars.githubusercontent.com/u/16549165?v=4" },
  { name: "Tyler Torrero", imageUrl: "https://avatars.githubusercontent.com/u/93111660?v=4" },
  { name: "Edgar Ulloa", imageUrl: "https://avatars.githubusercontent.com/u/36951879?v=4" },
  { name: "Scotty Wong", imageUrl: "https://avatars.githubusercontent.com/u/12021336?v=4" },

];

export default students;
