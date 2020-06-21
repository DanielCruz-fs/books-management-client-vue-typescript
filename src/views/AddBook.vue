<template>
  <div id="add-book">
    <form @submit="addBook($event)">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          aria-describedby="title"
          placeholder="Enter title"
          v-model="book.title"
        />
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input
          type="text"
          class="form-control"
          id="author"
          placeholder="Author"
          v-model="book.author"
        />
      </div>
      <button type="submit" class="btn btn-success">Add</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BookModel } from '@/models/BookModel';
import BookService from '@/services/BookService';

/** Without Dependency Injection DYI */
const bookService = new BookService();

@Component({
  name: 'AddBook',
})
export default class AddBook extends Vue {
  book = new BookModel();

  addBook(e: Event) {
    e.preventDefault();
    // console.log(this.book);
    bookService.addNewBook(this.book).then( resp => {
      console.log(resp);
      this.book = new BookModel();
    }).catch( console.log );
  }
}
</script>

<style></style>
