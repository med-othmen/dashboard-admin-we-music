select DISTINCT (P.id), P.title,P.picture,P.description,P.first_price,P.promo_price,P.media_home
T.libelle as type, 
SC.libelle as 
sleeve_condition,
G.libelle as genre,
A.nom as artiste,
MC.libelle as media_condition 


from produit as P, media_condition as MC, sleeve_condition as SC, type as T, artiste as A,genre as G

where P.sleeve_condition_id=MC.id and P.genre_id=G.id and P.type_id=T.id and P.artiste_id=A.id and P.media_condition_id=MC.id







SELECT P.title,P.picture,P.description,P.first_price,P.promo_price,P.media_home,T.libelle as type, 
SC.libelle as 
sleeve_condition,
G.libelle as genre,
A.nom as artiste,
MC.libelle as media_condition 

FROM produit AS P
JOIN media_condition as MC  ON P.media_condition_id=MC.id
JOIN sleeve_condition as SC ON P.media_condition_id=SC.id
JOIN type as T ON  P.type_id=T.id
JOIN  genre as G ON P.genre_id=G.id 
JOIN artiste as A ON P.artiste_id=A.id





WHERE food_id = '1'
GROUP BY f.food_id
