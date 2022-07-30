import PlaceCard from "../components/Accommodation/PlaceCard";
import PlaceCardType from "../models/PlaceCardModel";
import classes from "./Places.module.css";

const placeCardDataJSON = `[  
	{  
		"title": "Treehouse" , 
		"location": "Hrusice" , 
		"subtitle": "Renting entire unit"  ,
    "img": "https://serving.photos.photobox.com/7163432209021181e08123109def18c026daf64f82b16ffa206ccadef9b71eaba4b9def5.jpg" 
	},  
	{  
		"title": "Tiny House"  ,
		"location": "Hrusice" ,
		"subtitle": "Renting entire unit" ,
    "img": "https://serving.photos.photobox.com/606155075d2e50edecfe650823be846de1c2a18117a39adbf69065fa11d4b0baaf56ae85.jpg" 
	}  
]`;

const Places = () => {
  const placeCardData: PlaceCardType[] = JSON.parse(placeCardDataJSON);

  return (
    <section className={classes.placeCardSection}>
      <h1>My places</h1>
      <div className={classes.placesGrid}>
        {placeCardData.map((place) => {
          return (
            <PlaceCard
              key={place.title}
              img={place.img}
              title={place.title}
              location={place.location}
              subtitle={place.subtitle}
            ></PlaceCard>
          );
        })}
      </div>
    </section>
  );
};

export default Places;
