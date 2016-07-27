<template>
  <div>
    <ui-menu css="secondary">
      <ui-menu css="right">
        <ui-item>
          <ui-input css="icon">
            <input type="text" placeholder="Search...">
            <ui-icon css="search link"></ui-icon>
          </ui-input>
        </ui-item>
      </ui-menu>
    </ui-menu>  
    <ui-divider></ui-divider>
    <ui-form>
      <ui-fields css="three">
        <ui-field>
          <label>Book Title</label>
          <input type="text" placeholder="Book Title">
        </ui-field>
        <ui-field>
          <label>Book Catalog</label>
          <input type="text" placeholder="DOG">
        </ui-field>
        <ui-field>
          <label>Description</label>
          <input type="text" placeholder="Description">
        </ui-field>
      </ui-fields>
      <ui-button @click="">SCreate</ui-button>
    </ui-form>
<ui-divider></ui-divider>
    <ui-accordion css="styled fluid">
      <ui-title><ui-icon css="dropdown">What is a dog?</ui-icon></ui-title>
      <ui-content>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</ui-content>
      <ui-title><ui-icon css="dropdown">What kinds of dogs are there?</ui-icon></ui-title>
      <ui-content>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</ui-content>
      <ui-title><ui-icon css="dropdown">How do you acquire a dog?</ui-icon></ui-title>
      <ui-content>
        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
      </ui-content>
    </ui-accordion>
<ui-divider></ui-divider>
  </div>
</template>

<script>

export default {
  components: { }
}
</script>



