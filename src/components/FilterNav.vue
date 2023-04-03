<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{active: current === 'all'}">All</button>
    <button @click="updateFilter('completed')" :class="{active: current === 'completed'}">Completed</button>
    <button @click="updateFilter('ongoing')" :class="{active: current === 'ongoing'}">Ongoing</button>
  </nav>
</template>

<script>
export default {
    props: ['current'],
    methods:
    {
        updateFilter(by)
        {
            this.$emit("filterChange", by);
        }
    }
}
</script>

<style scoped>
.filter-nav button
{
    background: none;
    border: none;
    color: rgb(58, 85, 121);
    outline: none;
    font-size: 13px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
}
.filter-nav button.active
{
    color:brown;
}

</style>