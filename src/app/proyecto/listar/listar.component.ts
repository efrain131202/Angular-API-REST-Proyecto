// listar.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Proyecto } from 'src/app/modelo/proyecto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit, OnDestroy {
  proyectos: Proyecto[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private service: ServiceService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getProyecto()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.proyectos = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}