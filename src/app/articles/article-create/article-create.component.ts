import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
})
export class ArticleCreateComponent implements OnInit {
  articleForm!: FormGroup;

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.articleForm = new FormGroup({
      title: new FormControl<string | null>(null, Validators.required),
      source: new FormControl<string | null>(null, [Validators.required]),
      summary: new FormControl<string | null>(null, [Validators.required]),
    });
  }
  
  controlHasError(controlName: string, errorProperty: string, errorOnValue: boolean | string | number = true): boolean {
    const { errors, touched } = this.articleForm.controls[controlName];

    if (!touched || errors == null) return false; //>>>

    return errors[errorProperty] === errorOnValue;

  }

  createArticle(): void {
    if (this.articleForm.invalid) return this.articleForm.markAllAsTouched(); //>>>

    console.log('article created (not really - api doesn\'t support create)', this.articleForm.value)
    this.router.navigate(['/articles']);
  }
}
