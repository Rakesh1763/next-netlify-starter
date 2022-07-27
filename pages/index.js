import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome Onboard to Vmaker Support" />
        <p className="description">
          <script src="https://app.getshow.io/embed/media/cbl7JYEBog8c8zwfCNZA.jsonp" async></script><div class="animaker_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="animaker_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="animaker_embed animaker_async_cbl7JYEBog8c8zwfCNZA popover=true popupDisplayType=thumbnail" style="display:inline-block;height:100%;position:relative;width:100%"><section id="Animker_player_Customization" style="height:100%;width:100%;"></section></div></div></div><script src="https://static.getshow.io/play/app.bundle.js" type="text/javascript" async></script>
        </p>
      </main>

      <Footer />
    </div>
  )
}
