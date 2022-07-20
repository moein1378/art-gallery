<template>
    <div>
        <div v-if="!titleContent.useSlot" class="title-box">
            <h3 v-if="titleContent.title" class="font-weight-bold  black--text text-h3 mb-5">{{titleContent.title}}</h3>
            <hr v-if="titleContent.hasDivider" color="black" class="mb-5">
            <p v-if="titleContent.subtitle" class="grey--text text--darken-3">
                {{titleContent.subtitle}}
            </p>
        </div>
        <slot v-if="titleContent.useSlot" name="custom-style"></slot>
    </div>
</template>
<script>
export default {
    name:'section-title',
    props:{
        titleContent: Object
    }
}
</script>