# Passive Events

A module to address smoothing scrolling performance issues as outlined in
[Passive event listeners](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)

## Installation

### Bower

```
$ bower install passive-events
```

### Download

Download the [latest](https://github.com/cnnlabs/passive-events/archive/master.zip)

### Usage

Include the dist script in the html head or at the top of the html body

```
<script src="/js/passive-events.js" async><script>
```

## Example

1. Run your favorite static server
2. Load /example/index.html
3. In chrome open the inspector
4. While in the "Elements" tab select the body element
5. Select "Event Listeners" in the right menu of the inspector
6. Expand one of the listeners such as "mousewheel".
7. See that passive field has a value of true.
