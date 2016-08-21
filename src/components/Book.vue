<template>
  <ui-card>
    <ui-content>
      <ui-meta css="right floated">{{item.tags | json }}</ui-meta>
      <ui-header class="header">{{item.title}}</ui-header>
<!--
      <ui-reveal css="small circular fade image">
        <ui-image class="visible content" src="/static/images/user.jpg"></ui-image>
        <ui-image class="hidden content" src="/static/images/image.png"></ui-image>

      </ui-reveal>
      -->
      <ui-description>{{item.description}}.</ui-description>
      
    </ui-content>

    <ui-button css="bottom attached">
      <ui-button css="left labeled">
        <ui-label css="basic right pointing">28</ui-label>
        <ui-button>
          <ui-icon css="like">喜欢</icon>
        </ui-button>
      </ui-button>
    </ui-button>
  </ui-card>
</template>

<script>


export default {
  props:["item"]

  		
}
</script>