import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-news-glossary',
  templateUrl: './news-glossary.component.html',
  styleUrls: ['./news-glossary.component.scss']
})
export class NewsGlossaryComponent implements OnInit {

  public order = {
    'en': ['en', 'es', 'fr'],
    'es': ['es', 'fr', 'en'],
    'fr': ['fr', 'es', 'en']
  };

  public basics = [
    {
      'en': 'Best man',
      'fr': 'Témoin',
      'es': 'Testigo (chico)'
    },
    {
      'en': 'Bouquet / tossing the bouquet',
      'fr': 'Bouquet / lancer le bouquet',
      'es': 'Ramo / lanzar el ramo'
    },
    {
      'en': 'Bride',
      'fr': 'Mariée',
      'es': 'Novia'
    },
    {
      'en': 'Bridesmaid',
      'fr': 'Demoiselle d’honneur',
      'es': 'Dama de honor'
    },
    {
      'en': 'Champaign',
      'fr': 'Champagne',
      'es': 'Champán'
    },
    {
      'en': 'First dance',
      'fr': 'Première danse',
      'es': 'Primer baile / vals'
    },
    {
      'en': 'Hen do',
      'fr': 'Enterrement de vie de jeune fille',
      'es': 'Despedida de soltera'
    },
    {
      'en': 'Honeymoon',
      'fr': 'Lune de miel',
      'es': 'Luna de miel'
    },
    {
      'en': 'Husband',
      'fr': 'Mari',
      'es': 'Marido'
    },
    {
      'en': 'Reception',
      'fr': 'Réception',
      'es': 'Banquete'
    },
    {
      'en': 'Speech',
      'fr': 'Discours',
      'es': 'Discurso'
    },
    {
      'en': 'Stag do',
      'fr': 'Enterrement de vie de garçon',
      'es': 'Despedida de soltero'
    },
    {
      'en': 'Toast',
      'fr': 'Toast',
      'es': 'Brindis'
    },
    {
      'en': 'Vows',
      'fr': 'Veux',
      'es': 'Votos'
    },
    {
      'en': 'Wedding',
      'fr': 'Mariage',
      'es': 'Boda'
    },
    {
      'en': 'Wedding cake',
      'fr': 'Pièce montée',
      'es': 'Tarta nupcial'
    },
    {
      'en': 'Wedding rings',
      'fr': 'Alliances',
      'es': 'Alianzas'
    },
    {
      'en': 'Wife',
      'fr': 'Femme',
      'es': 'Mujer'
    },
    {
      'en': 'Newly-weds',
      'fr': 'Jeunes mariés',
      'es': 'Recién casados'
    },
    {
      'en': 'Groom',
      'fr': 'Marié',
      'es': 'Novio'
    }
  ];

  public useful = [
    {
      'en': '(To the DJ) Can you please play “Lo malo” by Aitana War?',
      'fr': '(Au DJ) Pourrais-tu jouer « Lo malo » d’Aitana War ?',
      'es': '(Al DJ) ¿Podrías poner “Lo malo” de Aitana War?'
    },
    {
      'en': 'All you need is love',
      'fr': 'Tout ce dont vous avez besoin c’est d’amour',
      'es': 'Todo lo que necesitas es amor'
    },
    {
      'en': 'Are you single?',
      'fr': 'Tu es célibataire ?',
      'es': '¿Estás soltero/a?'
    },
    {
      'en': 'Can I have some Chartreuse, please?',
      'fr': 'Un verre de Chartreuse, s’il vous plaît.',
      'es': 'Una copa de Chartreuse, por favor.'
    },
    {
      'en': 'Cheers!',
      'fr': 'Santé !',
      'es': '¡Salud!'
    },
    {
      'en': 'Do you like Harry Potter?',
      'fr': 'Est-ce que tu aimes Harry Potter ?',
      'es': '¿Te gusta Harry Potter?'
    },
    {
      'en': 'Have you met Matthieu?',
      'fr': 'Est-ce que tu connais Matthieu ?',
      'es': '¿Conoces a Matthieu?'
    },
    {
      'en': 'Here’s to the bride and groom!',
      'fr': 'Vivent les mariés !',
      'es': '¡Vivan los novios!'
    },
    {
      'en': 'I love Galicia!',
      'fr': 'J’adore la Galice !',
      'es': '¡Me encanta Galicia!'
    },
    {
      'en': 'Kiss, kiss, kiss!',
      'fr': 'Le bisou, le bisou, le bisou !',
      'es': '¡Que se besen, que se besen!'
    },
    {
      'en': 'What’s your name? / My name is María.',
      'fr': 'Comment tu t’appelles ? / Je m’appelle María.',
      'es': '¿Cómo te llamas? / Me llamo María.'
    },
    {
      'en': 'Where are you from? / I am from London.',
      'fr': 'Tu viens d’où ? / Je viens de Londres.',
      'es': '¿De dónde eres? / Soy de Londres.'
    },
    {
      'en': 'Would you like to dance with me?',
      'fr': 'Veux-tu danser avec moi ?',
      'es': '¿Quieres bailar conmigo?'
    }
  ];

  constructor(public translateService: TranslateService) { }

  ngOnInit() {
  }

  getOrderedList( lang: string, list: Object[]) {
    return list.sort((a, b) => {
      const wordA = a[lang].toUpperCase(); // ignore upper and lowercase
      const wordB = b[lang].toUpperCase(); // ignore upper and lowercase
      if (wordA < wordB) {
        return -1;
      }
      if (wordA > wordB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

}
