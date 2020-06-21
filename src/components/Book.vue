<template>
  <div class="col-sm-6 mt-4" id="book">
    <div class="card">
      <div class="card-body bg-light">
        <button @click="deleteBook(book.id)" type="button" class="btn btn-danger btn-sm mb-3">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text">Author: {{ book.author }}</p>
        <footer class="blockquote-footer">Created: <cite title="Source Title">{{ book.createdOn | humanize }}</cite></footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { BookModel } from '@/models/BookModel';
import BookService from '@/services/BookService';

const bookService = new BookService();

@Component({
  name: 'Book',
  components: {},
})
export default class Book extends Vue {
  @Prop() book: BookModel;
  
  async deleteBook(id: number) {
    await bookService.deleteBook(id);
    this.$emit('deleted');
  }
}
</script>

<style scoped></style>
