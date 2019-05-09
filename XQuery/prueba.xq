let $series := doc("http://rss.sensacine.com/series/top")
let $dateTime := $series/rss/channel/lastBuildDate
return

<series>
    <titulo>Top Series</titulo>
    <ultimaActualizacion>{string($dateTime)}</ultimaActualizacion>
    { for $item in $series/rss/channel/item[position() < 10] return
      <item>
        <fecha>{string($item/pubDate)}</fecha>
        <nombre>{string($item/title)}</nombre>
        <descripcion>{string($item/description)}</descripcion>
        <url>{$item/link}</url>
      </item>
    }
</series>
