export interface SlideContent {
    title?: string;
    subtitle?: string;
    description?: string;
    text?: string;
    code?: string;
    imageUrl?: string;
    stats?: Array<{ label: string; value: string }>;
    cta?: string;
}

export interface Slide {
    type: 'hero' | 'text' | 'code' | 'image' | 'stats' | 'finale';
    content: SlideContent;
}

export const slides: Slide[] = [
    {
        type: 'hero',
        content: {
            title: 'Expeditie Abyss',
            subtitle: 'Digitaliseer je weg door de diepe oceaan',
            description: 'Stap in de rol van digitale oceanograaf en verken de verborgen wereld onder het wateroppervlak met .NET en C#'
        }
    },
    {
        type: 'text',
        content: {
            title: 'De Oceaan Onthult Haar Geheimen',
            text: 'Diep onder het wateroppervlak schuilt een wereld die grotendeels onbekend is voor de mensheid. Dankzij geavanceerde technologieën kunnen we dit rijke ecosysteem vol leven verkennen. Kleurrijke koraalriffen en sierlijke zeedieren wachten om ontdekt te worden.'
        }
    },
    {
        type: 'text',
        content: {
            title: 'Twee Routes',
            text: 'De expeditie bestaat uit twee fascinerende routes. Kies jouw pad door de diepe oceaan en ontdek de wonderen die op je wachten.'
        }
    },
    {
        type: 'code',
        content: {
            title: 'Route 1: Leven & Licht',
            code: `public class MarineLife
{
    public string Species { get; set; }
    public int Depth { get; set; }
    public double Luminosity { get; set; }
    
    public void Explore()
    {
        Console.WriteLine($"Discovering {Species} at {Depth}m");
        AnalyzeBioluminescence();
    }
    
    private void AnalyzeBioluminescence()
    {
        if (Luminosity > 0)
            Console.WriteLine("Bioluminescent species detected!");
    }
}`
        }
    },
    {
        type: 'image',
        content: {
            title: 'Koraalriffen',
            description: 'Kleurrijke ecosystemen boordevol leven en biodiversiteit',
            imageUrl: 'https://static.coral.org/uploads/2024/02/Give-The-Gift-Of-Coral-Image-1.jpg'
        }
    },
    {
        type: 'text',
        content: {
            title: 'Bioluminescentie',
            text: 'In de diepste delen van de oceaan produceren organismen hun eigen licht. Dit fenomeen, bioluminescentie genoemd, is essentieel voor communicatie, camouflage en jacht in de pikdonkere diepten.'
        }
    },
    {
        type: 'stats',
        content: {
            title: 'Expeditie Statistieken',
            stats: [
                { label: 'Maximale Diepte', value: '11,000m' },
                { label: 'Soorten Ontdekt', value: '2,000+' },
                { label: 'Data Verzameld', value: '1M+' },
                { label: 'Formaties Gescand', value: '500+' },
                { label: 'Temperatuur Range', value: '-2°C tot 400°C' },
                { label: 'Pressure (atm)', value: '1,100' }
            ]
        }
    },
    {
        type: 'text',
        content: {
            title: 'Hydrothermale Bronnen',
            text: 'Deze opmerkelijke geologische formaties creëren unieke ecosystemen die gedijen in extreme omstandigheden. Zonder zonlicht, maar met mineraalrijke bronnen, ontstaat hier een totaal andere vorm van leven.'
        }
    },
    {
        type: 'image',
        content: {
            title: 'De Abyss',
            description: 'Mysterieuze structuren in de diepste delen van de oceaan',
            imageUrl: 'https://static.toiimg.com/thumb/110965104/Water-bodies.jpg?width=636&height=358&resize=4'
        }
    },
    {
        type: 'finale',
        content: {
            title: 'Begin Je Expeditie',
            subtitle: 'De oceaan wacht op jou',
            cta: 'Start Challenge 108'
        }
    }
];