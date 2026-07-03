import styles from './PrivacyPolicy.module.css'

export default function PrivacyPolicyContent({ lang }: { lang: 'en' | 'pl' }) {
  if (lang === 'pl') {
    return (
      <div className={styles.content}>
        <h1>Polityka Prywatności DiabCam</h1>
        <p className={styles.lastUpdated}>Ostatnia aktualizacja: 21 marca 2026</p>

        <section>
          <h2>1. Administrator Danych</h2>
          <p>Administratorem Twoich danych osobowych jest <strong>Corebell</strong>. Dbamy o Twą prywatność i bezpieczeństwo danych. Wszelkie pytania prosimy kierować na adres: <strong>corebelldev@gmail.com</strong>.</p>
        </section>

        <section>
          <h2>2. Wyłączenie Odpowiedzialności Medycznej</h2>
          <p><strong>DiabCam nie jest wyrobem medycznym.</strong> Wyliczenia AI (WW, WBT) mają charakter wyłącznie edukacyjny i szacunkowy. Przed podaniem insuliny lub zmianą leczenia użytkownik <strong>musi</strong> zweryfikować dane i skonsultować się z lekarzem. Aplikacja jest narzędziem pomocniczym i nie zastępuje profesjonalnej porady lekarskiej.</p>
        </section>

        <section>
          <h2>3. Przetwarzanie Danych Zdrowotnych i Zakres Danych</h2>
          <p>W celu zapewnienia pełnej funkcjonalności zbieramy następujące dane:</p>
          <ul>
            <li><strong>Dane konta:</strong> Adres e-mail niezbędny do rejestracji i odzyskiwania dostępu.</li>
            <li><strong>Dane o posiłkach i parametry metaboliczne:</strong> Cele, preferencje oraz historia posiłków (składniki, waga, wartości odżywcze).</li>
            <li><strong>Zasada poufności:</strong> Przetwarzamy Twoje dane o posiłkach i parametrach metabolicznych <strong>wyłącznie w celu świadczenia usługi dziennika</strong>. <strong>Nie udostępniamy</strong> tych danych firmom trzecim ani reklamodawcom.</li>
            <li><strong>Interfejsy API Google:</strong> Nasze wykorzystanie informacji otrzymanych z interfejsów API Google będzie zgodne z <strong>Google API Services User Data Policy</strong>, w tym z wymaganiami dotyczącymi <strong>ograniczonego wykorzystania (Limited Use)</strong>.</li>
            <li><strong>Multimedia:</strong> Dostęp do aparatu urządzenia odbywa się wyłącznie za wyraźną zgodą użytkownika i jest wykorzystywany tylko w momencie robienia zdjęcia posiłku do analizy AI. <strong>Zdjęcia nie są gromadzone w tle.</strong></li>
            <li><strong>Dane techniczne:</strong> Logi systemowe, typ urządzenia i wersja systemu w celach diagnostycznych.</li>
          </ul>
        </section>

        <section>
          <h2>4. Cel i Sposób Przetwarzania</h2>
          <p>Dane są przetwarzane na podstawie Twojej zgody (art. 9 ust. 2 lit. a RODO) w celu:</p>
          <ul>
            <li>Analizy wartości odżywczych i wyznaczania współczynników (IG, ŁG, WW, WBT) przez AI.</li>
            <li>Tworzenia podsumowań i statystyk w Twoim dzienniku.</li>
            <li>Synchronizacji danych między urządzeniami (chmura Google Firebase).</li>
            <li>Doskonalenia algorytmów rozpoznawania obrazu.</li>
          </ul>
        </section>

        <section>
          <h2>5. Udostępnianie Danych</h2>
          <p>Dane są powierzane jedynie zaufanym partnerom technologicznym:</p>
          <ul>
            <li><strong>Google Firebase:</strong> Hosting, baza danych i uwierzytelnianie.</li>
            <li><strong>Dostawcy AI:</strong> Przetwarzanie obrazów w celu analizy (szyfrowane połączenie).</li>
            <li><strong>Brak reklamodawców:</strong> Nigdy nie sprzedajemy ani nie udostępniamy Twoich danych w celach marketingowych lub reklamowych.</li>
          </ul>
        </section>

        <section>
          <h2>6. Przechowywanie i Usuwanie Danych</h2>
          <ul>
            <li><strong>Okres przechowywania:</strong> Twoje dane są przechowywane przez okres aktywności Twojego konta.</li>
            <li><strong>Usuwanie:</strong> Możesz w każdej chwili usunąć swoje konto i wszystkie powiązane z nim dane poprzez ustawienia w aplikacji lub kontaktując się z nami pod adresem <strong>corebelldev@gmail.com</strong>. Po otrzymaniu zgłoszenia Twoje dane zostaną trwale usunięte z naszych serwerów w ciągu 30 dni.</li>
          </ul>
        </section>

        <section>
          <h2>7. Bezpieczeństwo</h2>
          <p>Stosujemy wysokie standardy ochrony, w tym szyfrowanie SSL/TLS oraz zabezpieczone bazy danych. Dostęp do konta chroniony jest autoryzacją Google lub bezpiecznym hasłem.</p>
        </section>

        <section>
          <h2>8. Twoje Prawa (RODO)</h2>
          <p>Przysługuje Ci prawo do dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz wycofania zgody w dowolnym momencie.</p>
        </section>

        <section>
          <h2>9. Prywatność Dzieci</h2>
          <p>Aplikacja posiada klasyfikację PEGI 3, co oznacza, że jej treść jest bezpieczna dla wszystkich grup wiekowych. Niemniej jednak, nie zbieramy świadomie danych osobowych od dzieci poniżej 16. roku życia bez zgody ich opiekunów prawnych. Jeśli rodzic lub opiekun dowie się, że jego dziecko przekazało nam dane osobowe bez jego zgody, prosimy o kontakt pod adresem <strong>corebelldev@gmail.com</strong> – niezwłocznie usuniemy takie informacje.</p>
        </section>
      </div>
    )
  }

  return (
    <div className={styles.content}>
      <h1>DiabCam Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last updated: March 21, 2026</p>

      <section>
        <h2>1. Data Controller</h2>
        <p>The controller of your personal data is <strong>Corebell</strong>. We care about your privacy and the security of your data. Please direct any questions to: <strong>corebelldev@gmail.com</strong>.</p>
      </section>

      <section>
        <h2>2. Medical Disclaimer</h2>
        <p><strong>DiabCam is not a medical device.</strong> AI calculations (e.g., Carbohydrate Exchange - WW, Protein-Fat Exchange - WBT) are for educational and estimated purposes only. Before administering insulin or changing treatment, the user <strong>must</strong> verify the data and consult with a physician. The app is a supporting tool and cannot replace professional medical advice.</p>
      </section>

      <section>
        <h2>3. Health Data Handling & Scope of Collected Data</h2>
        <p>We collect the following data to ensure the full functionality of the application:</p>
        <ul>
          <li><strong>Account Data:</strong> Email address required for registration and access recovery.</li>
          <li><strong>Health & Meal Data:</strong> Your set goals, preferences, metabolic parameters, and saved meal history (ingredients, weight, calculated nutritional values).</li>
          <li><strong>Confidentiality:</strong> We process your health data and meal parameters <strong>only for the purpose of providing the diary service</strong>. We <strong>do not share</strong> this data with third-party companies or advertisers.</li>
          <li><strong>Google API Services:</strong> Our use of information received from Google APIs will adhere to the <strong>Google API Services User Data Policy</strong>, including the <strong>Limited Use</strong> requirements.</li>
          <li><strong>Multimedia:</strong> Camera access is granted only with the explicit consent of the user and is used only at the moment of taking a photo of a meal for AI analysis. <strong>Photos are not collected in the background.</strong></li>
          <li><strong>Technical Data:</strong> System logs, device type, and OS version for diagnostic purposes.</li>
        </ul>
      </section>

      <section>
        <h2>4. Purpose and Method of Processing</h2>
        <p>Your data is processed based on your explicit consent (Art. 9(2)(a) GDPR) for:</p>
        <ul>
          <li>Analyzing the nutritional value of meals and determining indicators (GI, GL, WW, WBT) using AI.</li>
          <li>Creating summaries and statistics in your meal diary.</li>
          <li>Synchronizing data across your devices (via Google Firebase).</li>
          <li>Improving image recognition algorithms.</li>
        </ul>
      </section>

      <section>
        <h2>5. Data Sharing</h2>
        <p>Your data is entrusted only to trusted technological partners for service operation:</p>
        <ul>
          <li><strong>Google Firebase:</strong> Hosting, database, and authentication.</li>
          <li><strong>AI Providers:</strong> Processing images for analysis (data is transmitted via encrypted connections).</li>
          <li><strong>No Third-Party Sales:</strong> We never sell or share your data for marketing or advertising purposes.</li>
        </ul>
      </section>

      <section>
        <h2>6. Data Retention & Deletion</h2>
        <ul>
          <li><strong>Retention:</strong> Your data is stored as long as your account is active.</li>
          <li><strong>Deletion:</strong> You can delete your account and all associated data at any time through the application settings or by sending a request to <strong>corebelldev@gmail.com</strong>. Upon request, all your data will be permanently removed from our servers within 30 days.</li>
        </ul>
      </section>

      <section>
        <h2>7. Security</h2>
        <p>We apply high security standards, including SSL/TLS encryption and secured databases. Access to your account is protected by Google authorization or a secure password.</p>
      </section>

      <section>
        <h2>8. Your Rights (GDPR)</h2>
        <p>Under GDPR, you have the right to access, rectify, or delete your data, restrict its processing, and withdraw your consent at any time.</p>
      </section>

      <section>
        <h2>9. Children&apos;s Privacy</h2>
        <p>The application has a PEGI 3 rating, which means that its content is safe for all age groups. However, we do not knowingly collect personal data from children under the age of 16 without the consent of their legal guardians. If a parent or guardian becomes aware that their child has provided us with personal data without their consent, please contact us at <strong>corebelldev@gmail.com</strong> – we will immediately delete such information.</p>
      </section>
    </div>
  )
}
