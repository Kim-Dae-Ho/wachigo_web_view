package com.wangin.admin.service;

import com.wangin.admin.dto.SpringTableDto;
import com.wangin.admin.entity.SpringTableEntity;
import com.wangin.admin.predicate.SpringTablePredicate;
import com.wangin.admin.repository.SpringTableRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.List;

@org.springframework.stereotype.Service
@AllArgsConstructor
public class SpringTableService {

    private SpringTableRepository springTableRepository;

    //테이블 정보 모두 조회
    public Page <SpringTableEntity> selectALLTable(String selectKey, String titleText, Pageable pageable){
        return springTableRepository.findAll(SpringTablePredicate.search(selectKey, titleText),pageable);
    }

    //테이블에 instert 해주는 코드
    @Transactional
    public Long insertData(SpringTableDto springTableDto){
        return springTableRepository.save(springTableDto.toEntity()).getMyNumber();
    }

    //수정페이지 이동시켜주는 코드
    @Transactional
    public List <SpringTableEntity> modify_page(Long myNumber){
        return springTableRepository.findByMyNumber(myNumber);
    }

    //DB에 진짜로 수정 시켜주는 코드
    @Transactional
    public Long set_modify(SpringTableEntity springTableEntity){
        return springTableRepository.save(springTableEntity).getMyNumber();
    }

    //DB에 일부 데이터 삭제 시켜주는 코드
    public void delete(Long myNumber) {
        springTableRepository.deleteById(myNumber);
    }

}
