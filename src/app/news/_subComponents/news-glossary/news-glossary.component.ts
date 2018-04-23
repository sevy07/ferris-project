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

  public basics = {
    'en': [
      'Best man',
      'Bouquet / tossing the bouquet',
      'Bride',
      'Bridesmaid',
      'Champaign',
      'First dance',
      'Groom',
      'Hen do',
      'Honeymoon',
      'Husband',
      'Reception',
      'Speech',
      'Stag do',
      'Toast',
      'Vows',
      'Wedding',
      'Wedding cake',
      'Wedding rings',
      'Wife',
      'Newly-weds'
    ],
    'es': [
      'Testigo (chico)',
      'Ramo / lanzar el ramo',
      'Novia',
      'Dama de honor',
      'Champán',
      'Primer baile / vals',
      'Novio',
      'Despedida de soltera',
      'Luna de miel',
      'Marido',
      'Banquete',
      'Discurso',
      'Despedida de soltero',
      'Brindis',
      'Votos',
      'Boda',
      'Tarta nupcial',
      'Alianzas',
      'Mujer',
      'Recién casados'
    ],
    'fr': [
      'Témoin',
      'Bouquet / lancer le bouquet',
      'Mariée',
      'Demoiselle d’honneur',
      'Champagne',
      'Première danse',
      'Marié',
      'Enterrement de vie de jeune fille',
      'Lune de miel',
      'Mari',
      'Réception',
      'Discours',
      'Enterrement de vie de garçon',
      'Toast',
      'Veux',
      'Mariage',
      'Pièce montée',
      'Alliances',
      'Femme',
      'Jeunes mariés'
    ]
  };

  public useful = {
    'en': [
      '(To the DJ) Can you please play “Lo malo” by Aitana War?',
      'All you need is love',
      'Are you single?',
      'Can I have some Chartreuse, please?',
      'Cheers!',
      'Do you like Harry Potter?',
      'Have you met Matthieu?',
      'Here’s to the bride and groom!',
      'I love Galicia!',
      'Kiss, kiss, kiss!',
      'What’s your name? / My name is María.',
      'Where are you from? / I am from London.',
      'Would you like to dance with me?',
    ],
    'es': [
      '(Al DJ) ¿Podrías poner “Lo malo” de Aitana War?',
      'Todo lo que necesitas es amor',
      '¿Estás soltero/a?',
      'Una copa de Chartreuse, por favor.',
      '¡Salud!',
      '¿Te gusta Harry Potter?',
      '¿Conoces a Matthieu?',
      '¡Vivan los novios!',
      '¡Me encanta Galicia!',
      '¡Que se besen, que se besen!',
      '¿Cómo te llamas? / Me llamo María.',
      '¿De dónde eres? / Soy de Londres.',
      '¿Quieres bailar conmigo?',
    ],
    'fr': [
      '(Au DJ) Pourrais-tu jouer « Lo malo » d’Aitana War ?',
      'Tout ce dont vous avez besoin c’est d’amour',
      'Tu es célibataire ?',
      'Un verre de Chartreuse, s’il vous plaît.',
      'Santé !',
      'Est-ce que tu aimes Harry Potter ?',
      'Est-ce que tu connais Matthieu ?',
      'Vivent les mariés !',
      'J’adore la Galice !',
      'Le bisou, le bisou, le bisou !',
      'Comment tu t’appelles ? / Je m’appelle María.',
      'Tu viens d’où ? / Je viens de Londres.',
      'Veux-tu danser avec moi ?',
    ]
  };

  constructor(public translateService: TranslateService) { }

  ngOnInit() {
  }

}
