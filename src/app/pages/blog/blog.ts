import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [DatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  public blogPosts = [
    {
      id: 1,
      slug: 'de-toekomst-van-webdesign',
      imageUrl:
        'https://cdn.prod.website-files.com/68a47511779a71fac3a3bdcf/68a4754339c249102ee71f39_image17.jpeg',
      publishedAt: new Date(),
      updatedAt: new Date(),
      createdAt: new Date(),
      title: 'De toekomst van webdesign',
      blurb:
        'Webdesign evolueert met innovaties zoals kunstmatige intelligentie en duurzaam ontwerp. Dit artikel verkent de trends die de toekomst van webdesign vormgeven.',
      richText: `
      <h1>Innovaties in webdesign</h1><p>Webdesign evolueert voortdurend, met nieuwe technologieën en trends die de manier waarop we websites bouwen en gebruiken veranderen. Dit artikel verkent enkele van de belangrijkste innovaties die de toekomst van webdesign vormgeven.</p><h2>1. Kunstmatige intelligentie</h2><p>Kunstmatige intelligentie (AI) speelt een steeds grotere rol in webdesign. Van chatbots die klantenservice bieden tot AI-gestuurde ontwerptools, de mogelijkheden zijn eindeloos. AI kan helpen bij het personaliseren van de gebruikerservaring en het optimaliseren van de website.</p><h2>2. Responsieve en adaptieve ontwerpen</h2><p>Met de diversiteit aan apparaten die tegenwoordig worden gebruikt, is responsief en adaptief ontwerp cruciaal. Websites moeten zich aanpassen aan verschillende schermformaten en resoluties om een optimale gebruikerservaring te bieden.</p><h2>3. Duurzaam webdesign</h2><p>Met de groeiende bezorgdheid over het milieu, wordt duurzaam webdesign steeds belangrijker. Dit omvat het optimaliseren van websites voor energie-efficiëntie en het gebruik van groene hostingdiensten.</p><blockquote>De toekomst van webdesign is innovatief en gericht op gebruiksvriendelijkheid.</blockquote>
      `,
    },
    {
      id: 2,
      slug: 'de-toekomst-van-webdesign',
      imageUrl:
        'https://cdn.prod.website-files.com/68a47511779a71fac3a3bdcf/68a4754339c249102ee71f39_image17.jpeg',
      publishedAt: new Date(),
      updatedAt: new Date(),
      createdAt: new Date(),
      title: 'De toekomst van webdesign',
      blurb:
        'Webdesign evolueert met innovaties zoals kunstmatige intelligentie en duurzaam ontwerp. Dit artikel verkent de trends die de toekomst van webdesign vormgeven.',
      richText: `
      <h1>Innovaties in webdesign</h1><p>Webdesign evolueert voortdurend, met nieuwe technologieën en trends die de manier waarop we websites bouwen en gebruiken veranderen. Dit artikel verkent enkele van de belangrijkste innovaties die de toekomst van webdesign vormgeven.</p><h2>1. Kunstmatige intelligentie</h2><p>Kunstmatige intelligentie (AI) speelt een steeds grotere rol in webdesign. Van chatbots die klantenservice bieden tot AI-gestuurde ontwerptools, de mogelijkheden zijn eindeloos. AI kan helpen bij het personaliseren van de gebruikerservaring en het optimaliseren van de website.</p><h2>2. Responsieve en adaptieve ontwerpen</h2><p>Met de diversiteit aan apparaten die tegenwoordig worden gebruikt, is responsief en adaptief ontwerp cruciaal. Websites moeten zich aanpassen aan verschillende schermformaten en resoluties om een optimale gebruikerservaring te bieden.</p><h2>3. Duurzaam webdesign</h2><p>Met de groeiende bezorgdheid over het milieu, wordt duurzaam webdesign steeds belangrijker. Dit omvat het optimaliseren van websites voor energie-efficiëntie en het gebruik van groene hostingdiensten.</p><blockquote>De toekomst van webdesign is innovatief en gericht op gebruiksvriendelijkheid.</blockquote>
      `,
    },
    {
      id: 3,
      slug: 'de-toekomst-van-webdesign',
      imageUrl:
        'https://cdn.prod.website-files.com/68a47511779a71fac3a3bdcf/68a4754339c249102ee71f39_image17.jpeg',
      publishedAt: new Date(),
      updatedAt: new Date(),
      createdAt: new Date(),
      title: 'De toekomst van webdesign',
      blurb:
        'Webdesign evolueert met innovaties zoals kunstmatige intelligentie en duurzaam ontwerp. Dit artikel verkent de trends die de toekomst van webdesign vormgeven.',
      richText: `
      <h1>Innovaties in webdesign</h1><p>Webdesign evolueert voortdurend, met nieuwe technologieën en trends die de manier waarop we websites bouwen en gebruiken veranderen. Dit artikel verkent enkele van de belangrijkste innovaties die de toekomst van webdesign vormgeven.</p><h2>1. Kunstmatige intelligentie</h2><p>Kunstmatige intelligentie (AI) speelt een steeds grotere rol in webdesign. Van chatbots die klantenservice bieden tot AI-gestuurde ontwerptools, de mogelijkheden zijn eindeloos. AI kan helpen bij het personaliseren van de gebruikerservaring en het optimaliseren van de website.</p><h2>2. Responsieve en adaptieve ontwerpen</h2><p>Met de diversiteit aan apparaten die tegenwoordig worden gebruikt, is responsief en adaptief ontwerp cruciaal. Websites moeten zich aanpassen aan verschillende schermformaten en resoluties om een optimale gebruikerservaring te bieden.</p><h2>3. Duurzaam webdesign</h2><p>Met de groeiende bezorgdheid over het milieu, wordt duurzaam webdesign steeds belangrijker. Dit omvat het optimaliseren van websites voor energie-efficiëntie en het gebruik van groene hostingdiensten.</p><blockquote>De toekomst van webdesign is innovatief en gericht op gebruiksvriendelijkheid.</blockquote>
      `,
    },
    {
      id: 4,
      slug: 'de-toekomst-van-webdesign',
      imageUrl:
        'https://cdn.prod.website-files.com/68a47511779a71fac3a3bdcf/68a4754339c249102ee71f39_image17.jpeg',
      publishedAt: new Date(),
      updatedAt: new Date(),
      createdAt: new Date(),
      title: 'De toekomst van webdesign',
      blurb:
        'Webdesign evolueert met innovaties zoals kunstmatige intelligentie en duurzaam ontwerp. Dit artikel verkent de trends die de toekomst van webdesign vormgeven.',
      richText: `
      <h1>Innovaties in webdesign</h1><p>Webdesign evolueert voortdurend, met nieuwe technologieën en trends die de manier waarop we websites bouwen en gebruiken veranderen. Dit artikel verkent enkele van de belangrijkste innovaties die de toekomst van webdesign vormgeven.</p><h2>1. Kunstmatige intelligentie</h2><p>Kunstmatige intelligentie (AI) speelt een steeds grotere rol in webdesign. Van chatbots die klantenservice bieden tot AI-gestuurde ontwerptools, de mogelijkheden zijn eindeloos. AI kan helpen bij het personaliseren van de gebruikerservaring en het optimaliseren van de website.</p><h2>2. Responsieve en adaptieve ontwerpen</h2><p>Met de diversiteit aan apparaten die tegenwoordig worden gebruikt, is responsief en adaptief ontwerp cruciaal. Websites moeten zich aanpassen aan verschillende schermformaten en resoluties om een optimale gebruikerservaring te bieden.</p><h2>3. Duurzaam webdesign</h2><p>Met de groeiende bezorgdheid over het milieu, wordt duurzaam webdesign steeds belangrijker. Dit omvat het optimaliseren van websites voor energie-efficiëntie en het gebruik van groene hostingdiensten.</p><blockquote>De toekomst van webdesign is innovatief en gericht op gebruiksvriendelijkheid.</blockquote>
      `,
    },
  ];
}
