# Astro

## Astro.props

Все атрибуты компонента доступны через объект:

```ts
Astro.props;
```

Например:

```astro
<Section class="pt-20" />
```

внутри компонента:

```ts
Astro.props.class;
```

---

## Типизация

```ts
interface Props {
  class?: string;
}

const { class: className = "" } = Astro.props as Props;
```

### Почему `className`?

Снаружи Astro использует HTML и принимает атрибут `class`.

Внутри компонента свойство переименовывается в `className` для удобства чтения и во избежание путаницы с ключевым словом `class`.

---

## Slot

`<slot />` позволяет вкладывать произвольное содержимое внутрь компонента.

Он аналогичен `children` в React.
