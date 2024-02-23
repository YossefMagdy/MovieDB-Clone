import { TestBed } from '@angular/core/testing';
import {  HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { MovieService } from "./movie.service"
import { Images, trMovie } from 'server/db-server';

describe('MovieService',()=>{
    

    let MovieS:MovieService;
    let testingControl:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[
                MovieService
            ]
        })
        MovieS=TestBed.inject(MovieService);
        testingControl=TestBed.inject(HttpTestingController);

    })

    it('Should Retrive all Image',()=>{
       let subscription=  MovieS.GetIMage().subscribe((image)=>{
            expect(image).toBeTruthy();
        })
        const req = testingControl.expectOne("https://api.themoviedb.org/3/movie/550/images?api_key=f00358d51b413f99420b153f15514668&language=en-US&include_image_language=en");
        expect(req.request.method).toEqual('GET')
        req.flush(Images)
        subscription.unsubscribe();
    })
    it('should get all tranding movie',()=>{
        MovieS.TrandingMovie('day').subscribe((TrMovie)=>{
            expect(TrMovie).toBeTruthy('No data come')
            expect(TrMovie.results.length).toBe(1)
            expect(TrMovie.results[0].id).toBe(82452)
        })
        const req = testingControl.expectOne("https://api.themoviedb.org/3/trending/all/day?api_key=f00358d51b413f99420b153f15514668");
        expect(req.request.method).toEqual('GET')
        req.flush(trMovie)
    })
    it('tranding movie should fail ',()=>{
        MovieS.TrandingMovie('day').subscribe({
            error:(HttpErrorResponse)=>{
                expect(HttpErrorResponse.status).toBe(404)
              }
        })
        
        const req = testingControl.expectOne("https://api.themoviedb.org/3/trending/all/day?api_key=f00358d51b413f99420b153f15514668");
        expect(req.request.method).toEqual('GET')
        req.flush('save course fail',{status:404,statusText:'Not Found'})
    })
   
    afterEach(() => {
        // After each test, assert that there are no more pending requests
        testingControl.verify();
    });

})