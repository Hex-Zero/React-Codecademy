const apiKey = 'rPDurkM5RSTPv0EF7jqIv1NNXzOe2Q1c7aeBgGEfcqgUwXVZy54YhhwrYZIxqCEgs6MBeRrRKimCV5VePpcoWL3E6RQLCgXHoo3wyeV59c_sItsBJWmFM4S9GRHjXHYx';
const Yelp = {
    searchYelp(term, location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        , { 
            headers: {
              Authorization: `Bearer ${apiKey}` 
            }}).then(response => {
                return response.json();
              }).then(jsonResponse => {
               if(jsonResponse.businesses){return jsonResponse.businesses.map((business => {console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        sipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewConut: business.review_count
                    };
                }))}
              });;
    }
}

export default Yelp;








