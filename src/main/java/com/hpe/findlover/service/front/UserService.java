package com.hpe.findlover.service.front;

import com.hpe.findlover.model.Dict;
import com.hpe.findlover.model.UserBasic;
import com.hpe.findlover.service.BaseService;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService extends BaseService<UserBasic> {
	UserBasic selectByEmail(String email);

}
